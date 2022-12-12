export const rows = [
  createData("Water Leakage Repair", "Maintenance", "22 jan 22", "K-F01-U277"),
  createData(
    "Electricity Voltage Drop",
    "Maintenance",
    "22 jan 22",
    "K-F01-U277"
  ),
  createData("Water Leakage Repair", "Maintenance", "22 jan 22", "K-F01-U277"),
  createData(
    "Electricity Voltage Drop",
    "Maintenance",
    "22 jan 22",
    "K-F01-U277"
  ),
  createData("Water Leakage Repair", "Maintenance", "22 jan 22", "K-F01-U277"),
  createData(
    "Electricity Voltage Drop",
    "Maintenance",
    "22 jan 22",
    "K-F01-U277"
  ),
];
function createData(name, type, date, id) {
  return { name, type, date, id };
}

export const data = [
  {
    count: 14,
    icon: "actiiveUnit.png",
    dis: "Active Properties",
  },
  {
    count: "06",
    icon: "block.png",
    dis: "Blocks",
  },
  {
    count: 12,
    icon: "floors.png",
    dis: "Floors",
  },
  {
    count: 14,
    icon: "residents.png",
    dis: "Residents",
  },
  {
    count: 10,
    icon: "actiiveUnit.png",
    dis: "Active unit",
  },
  {
    count: "03",
    icon: "vacant.png",
    dis: "Vaccant",
  },
  {
    count: 17,
    icon: "reserved.png",
    dis: "Reserved",
  },
  {
    count: 45,
    icon: "occupied.png",
    dis: "Occupied",
  },
];

export const chartDetails = [
  {
    name: "Property Types",
    chartType: "PieChart",
    data: [
      ["Task", "Hours per Day"],
      ["Vacant", 25],
      ["Occupied", 25],
      ["Reserved", 50],
      ["Listed", 25],
    ],
    option: {
      legend: "bottom",
      colors: ["#58D0E0", "#FF9340", "#5AC782", "#F3E137"],
    },
  },
  {
    name: "Unit Category",
    chartType: "Bar",
    data: [
      ["Task", " "],
      ["Vacant", 25],
      ["Occupied", 25],
      ["Reserved", 50],
      ["Listed", 25],
    ],
    option: {
      colors: ["#5AC782"],
      legend: "bottom",
    },
  },
  {
    name: "Vacant Unit By Property",
    chartType: "BarChart",
    data: [
      ["Task", "No of Vacants"],
      ["Rubix", 10],
      ["Eat", 22],
      ["Commute", 32],
      ["Watch TV", 21],
      ["Sleep", 7],
    ],
    option: {
      colors: ["#58D0E0"],
      legend: "bottom",
    },
  },
  {
    name: "Total Area",
    chartType: "PieChart",
    data: [
      ["Task", "Hours per Day"],
      ["Commerical", 20],
      ["Residential", 25],
    ],
    option: {
      legend: "bottom",
      colors: ["#5AC782", "#F3E137"],

      pieHole: 0.4,
      is3D: false,
    },
  },
];

export const table = [
  createTd("Prop 011", "Tyons", "22", "02", "47%"),
  createTd("Prop 012", "Rubix", "52", "14", "27%"),
  createTd("Prop 013", "Phonix", "46", "34", "54%"),
  createTd("Prop 014", "Thapar", "27", "76", "65%"),
  createTd("Prop 015", "Marian", "29", "33", "23%"),
  createTd("Prop 016", "Tyons", "43", "34", "34%"),
  createTd("Prop 017", "Tyons", "87", "56", "21%"),
  createTd("Prop 011", "Tyons", "22", "02", "47%"),
  createTd("Prop 012", "Rubix", "52", "14", "27%"),
  createTd("Prop 013", "Phonix", "46", "34", "54%"),
];

function createTd(
  propertyId,
  propertyName,
  totelUnit,
  occupeidUnit,
  occupancy
) {
  return { propertyId, propertyName, totelUnit, occupeidUnit, occupancy };
}


export const selectList = [
  {
    label: "Company Name",
    defaultValue: "Company Name",
    options: [
      { key: "Company Name", value: "Company Name" },
      { key: "12", value: "we" },
    ],
  },
  {
    label: "Property Name",
    defaultValue: "Rubix Appartment",
    options: [
      { key: "Rubix Appartment", value: "Rubix Appartment" },
      { key: "MVP Appartment", value: "MVP Appartment" },
    ],
  },
  {
    label: "Payment Period",
    defaultValue: "Daily",
    options: [
      { key: "Daily", value: "Daily" },
      { key: "Weekly", value: "Weekly" },
      { key: "Monthly", value: "Monthly" },
    ],
  },
  {
    label: "Status",
    defaultValue: "Active",
    options: [
      { key: "Active", value: "Active" },
      { key: "InActive", value: "InActive" },
    ],
  },
];