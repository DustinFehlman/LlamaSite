function FactBook() {
   this.facts = [];

    this.grabRandomFact = function () {
        return this.facts[Math.floor((Math.random() * this.facts.length))];
    }
}