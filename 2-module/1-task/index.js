function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    let salary = salaries[key];
    if (isFinite(salary)) {
      sum += salary;
    }
  }
  return sum;
}
