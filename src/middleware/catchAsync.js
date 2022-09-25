import logger from "../helpers/logger";

export default catchAsync => async (request, response, next) => {
  try {
    await catchAsync(request, response, next);
  } catch (error) {
    logger.error(error)
    return response.status(error.statusCode || 500).json({
      status: "error",
      message: error.message,
    })
  }
};
