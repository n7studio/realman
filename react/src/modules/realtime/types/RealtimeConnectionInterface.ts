export interface RealtimeConnectionInterface {
    on(methodName: string, newMethod: (...args: any[]) => void): void;
    send(methodName: string, ...args: any[]): Promise<void>;
    start(): Promise<void>;
}