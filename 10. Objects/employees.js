function Employees(employeeList) {
    const employeeData = {};
  
    for (const employee of employeeList) {
      const personalNum = employee.length; 
      employeeData[employee] = personalNum;
    }
  
    for (const [employee, personalNum] of Object.entries(employeeData)) {
      console.log(`Name: ${employee} -- Personal Number: ${personalNum}`);
    }
  }
  
  const employeeList = ['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'];
  
  Employees(employeeList);
  
  /*  Output:
Name: Silas Butler -- Personal Number: 12
Name: Adnaan Buckley -- Personal Number: 14
Name: Juan Peterson -- Personal Number: 13
Name: Brendan Villarreal -- Personal Number: 18*/
