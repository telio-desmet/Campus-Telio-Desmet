export interface Logger {
  log(message: string): void
}

export class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(message)
  }
}

export class SilentLogger implements Logger {
  log(_message: string): void {
    // Volontairement silencieux.
  }
}
