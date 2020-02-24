const ItemList = ["Ashish Shah",
  "Rashmin Chhatrala",
  "Yash Dubey",
  "Prakash Jain",
  "Yashraj Singh",
  "Viraj Sinha",
  "Rajesh Kumar",
  "Mahesh Marwadi",
  "Suresh Sahni",
  "Amar Vilas",
  "Virdas Singhania",
  "Rajeshwari Bindra",
  "Birendra Bhalerao",
  "Virendra Bhupati",
  "Bhupendra Singh",
  "Bhuvam Bam",
  "Shri Raj",
  "Prashant Kamle",
  "Kamlesh Tomar",
  "Risabh Khare",
  "Rishi Kohli",
  "Kunwar Kharwanda",
  "Kartik Koli"];

let data ='';
ItemList.forEach(item => {
  data += item + `<br>`
})
console.log(data);
document.getElementById("data").innerHTML = data;
let string = document.getElementById("data").innerHTML;
let output = document.getElementById("name");
const getPortions = (queryString, string) => {
  let results = [];
  if (queryString.length > 0) {
    let regexp = new RegExp("(\\S*)?(" + queryString + ")(\\S*)?", "ig");
    string.replace(regexp, function (match, $1, $2, $3) {
      results.push(($1 || "") + "<span style=background-color:yellow>" + $2 + "</span>" + ($3 || ""));
    });
  }
  return results;
}

document.getElementById("search").addEventListener("input", function () {
  let result = getPortions(this.value, string);
  output.innerHTML = result.join(" ");
});

