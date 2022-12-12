const httStatus = require("http-status");

const httpStatus = require("http-status");
const jobService = require("../services/jobService");

const getUnpaidJobs = async (req, res) => {
  try {
    const jobs = await jobService.getUnpaidJobs(req);
    if (!jobs) {
      res.sendStatus(httStatus.NOT_FOUND);
    }
    res.status(httStatus.OK).json(jobs);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error });
  }
};

const payJob = async (req, res) => {
    try {
      const response = await jobService.payJob(req);
      if (response == '') {
        res.status(httpStatus.NOT_FOUND).json({ message: `no Job Found` });

      } else if (typeof response === 'string' && response.includes('No paid found for this job')) {
        res.status(httpStatus.CONFLICT).json({ message: `No paid found for this job` });

      } else {
        res.status(httpStatus.OK).json({ message: response });
      }

    } catch (error) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Error occurred while executing payment for a job', error });
    }
  };
module.exports = { getUnpaidJobs, payJob};
