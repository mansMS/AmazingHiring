export default (recruiters, vacancies) => {
  let set = new Set();
  vacancies.forEach(vacancy => vacancy.assignees.forEach(recruiterId => set.add(recruiterId)));
  const engagedRecruiters = recruiters.filter(recruter => set.has(recruter.id));
  return engagedRecruiters;
}