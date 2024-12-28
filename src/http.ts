import * as https from "node:https";
import * as http from "node:http";
import { URL } from "node:url";

import VERSION from "./version.js";

export interface HttpConfig {
  key: string;
  url: string;
  openTimeout: number;
}

export class DocusealApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DocusealApiError";
  }
}

export class Http {
  private config: HttpConfig;

  constructor(config: HttpConfig) {
    this.config = config;
  }

  async get<T>(path: string, params?: Record<string, any>): Promise<T> {
    const url = new URL(this.config.url + path);

    if (params) {
      Object.keys(params).forEach((key) =>
        url.searchParams.append(key, String(params[key])),
      );
    }

    return this.request<T>("GET", url);
  }

  async post<T>(path: string, data?: any): Promise<T> {
    const url = new URL(this.config.url + path);

    return this.request<T>("POST", url, data);
  }

  async put<T>(path: string, data?: any): Promise<T> {
    const url = new URL(this.config.url + path);

    return this.request<T>("PUT", url, data);
  }

  async delete<T>(path: string, params?: Record<string, any>): Promise<T> {
    const url = new URL(this.config.url + path);

    if (params) {
      Object.keys(params).forEach((key) =>
        url.searchParams.append(key, String(params[key])),
      );
    }

    return this.request<T>("DELETE", url);
  }

  private request<T>(
    method: "GET" | "POST" | "PUT" | "DELETE",
    url: URL,
    data?: any,
  ): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const options: https.RequestOptions = {
        method,
        hostname: url.hostname,
        port: url.port || (url.protocol === "https:" ? 443 : 80),
        path: url.pathname + url.search,
        headers: {
          "X-Auth-Token": this.config.key,
          "Content-Type": "application/json",
          "User-Agent": `DocuSeal JS v${VERSION}`,
        },
        timeout: this.config.openTimeout,
      };

      const transport = url.protocol === "https:" ? https : http;

      const req = transport.request(options, (res: http.IncomingMessage) => {
        let body = "";

        res.on("data", (chunk: string) => {
          body += chunk;
        });

        res.on("end", () => {
          try {
            if (
              res.statusCode &&
              res.statusCode >= 200 &&
              res.statusCode < 300
            ) {
              resolve(body ? JSON.parse(body) : ({} as T));
            } else {
              reject(
                new DocusealApiError(
                  `HTTP Error: ${res.statusCode} - ${body || res.statusMessage || "Unknown error"}`,
                ),
              );
            }
          } catch (error) {
            reject(error);
          }
        });
      });

      req.on("error", (err) => reject(err));
      req.on("timeout", () => {
        req.destroy(new DocusealApiError("Request timeout"));
        reject(new DocusealApiError("Request timeout"));
      });

      if (data) {
        req.write(JSON.stringify(data));
      }

      req.end();
    });
  }
}
