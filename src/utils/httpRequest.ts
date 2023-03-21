/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2023-02-11 12:45:04
 * @LastEditors: cejay
 * @LastEditTime: 2023-03-21 15:12:40
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
    static async post(url: string, data: any, timeout: number = 1000 * 60 * 10): Promise<any> {
        let signal: AbortSignal | undefined = undefined;
        let id: NodeJS.Timeout | undefined = undefined;
        if (timeout > 1000) {
            const controller = new AbortController();
            signal = controller.signal;
            id = setTimeout(() => {
                try {
                    controller.abort()
                } catch (error) {
                    console.log(error);
                }
            }, timeout);
        }

        try {
            const response = await fetch(url, {
                method: "POST",
                signal: signal,
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
            if (id) {
                clearTimeout(id);
            }
        }
        return null;
    }
}