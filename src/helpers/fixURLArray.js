export default (search, recruiters) => {
  const recruitersId = recruiters.map(recruiter => recruiter.id);
  return [...new Set(search.slice(10).split(',').map(n => +n).filter(number => recruitersId.includes(number)))]
}