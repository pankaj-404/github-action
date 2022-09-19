export class CountryService {
  getCountries() {
    console.log("service called");
    return (
      fetch("github-action/public/assets/data/countries.json")
        .then((res) => console.log("res==>", res.data))
        // .then((d) => d.data)
        .catch((e) => console.log("error==>", e))
    );
  }
}
