export class LateCheckInValidationError extends Error {
  constructor() {
    super(
      ' The check-in can only be validated until 29 minutes of its creation',
    )
  }
}
