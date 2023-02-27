/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-02-11 12:45:04
 * @LastEditors: cejay
 * @LastEditTime: 2023-02-27 11:27:45
 */

export class HttpRequest {
    static async get(url: string, timeout: number = 1000 * 30): Promise<any> {
        try {
            const controller = new AbortController();
            const id = setTimeout(() => controller.abort(), timeout);
            const response = await fetch(url, { signal: controller.signal });
            clearTimeout(id);
            if (response.ok) {
                const json = await response.json();
                return json;
            }
        } catch (error) {
            console.log(error);
        }
        return null;
    }
    static async post(url: string, data: any, timeout: number = 1000 * 30): Promise<any> {
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeout);
        try {
            const response = await fetch(url, {
                method: "POST",
                signal: controller.signal,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const json = await response.json();
                return json;
            }
        } catch (error) {
            console.log(error);
        } finally {
            clearTimeout(id);
        }
        return null;
    }
}