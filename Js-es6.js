const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  
const thirtyUp= ages.filter(x=> x>=31)
console.log(thirtyUp)

// find retail companies
const retailCompanies=companies.filter(findRetail=> findRetail.category ==='Retail')
console.log(retailCompanies)

//find auto companies
const autoCompanies=companies.filter(findAuto=> findAuto.category === 'Auto')
console.log(autoCompanies)

//find 80s companies
const eightiesCompanies=companies.filter(findEighties=> (findEighties.start >= 1980 && findEighties.start<1990))
console.log(eightiesCompanies)

//get lasted 20 years companies
const lastedTenYears=companies.filter(ten=> (ten.end - ten.start >=20))
console.log(lastedTenYears)

const doubleAged=ages.map(doubleIt=> doubleIt*doubleIt)
console.log(doubleAged)
 