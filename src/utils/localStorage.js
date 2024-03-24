const getJobApplication = () => {
  const getApplication = localStorage.getItem("job-applications");
  if (getApplication) {
    return JSON.parse(getApplication);
  }
  return [];
};

const saveJobApplication = (id) => {
  const saveJob = getJobApplication();
  const exists = saveJob.find((jobId) => jobId === id);
  if (!exists) {
    saveJob.push(id);
    localStorage.setItem("job-applications", JSON.stringify(saveJob));
  }
};

export { getJobApplication, saveJobApplication };
