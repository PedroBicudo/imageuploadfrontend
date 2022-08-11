interface ApiError {
  code: ApiErrorEnum;
  message: string;
}

enum ApiErrorEnum {
  IMAGE_EMPTY,
  IMAGE_NOT_PROVIDED,
  NOT_A_IMAGE,
  INVALID_IMAGE,
  IMAGE_TOO_BIG,
  IMAGE_NOT_FOUND,
  METHOD_NOT_ALLOWED,
  VALID_IMAGE_ID_NOT_PROVIDED
}

export {
  ApiError,
  ApiErrorEnum
}
