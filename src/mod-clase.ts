export type primeNumberItem = {
    n:number,
    m:number
}

export class PrimeNumber {

    private items: primeNumberItem[];
    private numbers:number[];
    private range:number[];
    private static primeNumber: PrimeNumber;

    private constructor(){
        this.items = [];
        this.numbers = [];
        this.range = [];
    };

    public static getInstance():PrimeNumber{
        if (!PrimeNumber.primeNumber) {
            PrimeNumber.primeNumber = new PrimeNumber();
        }
    return PrimeNumber.primeNumber;
    }
     
    
    getPrimes(n:number){
        let i:number = 1;
        let counter:number = 0;
        let prime:number = 0;
        while(counter !== n){
            for(let k = 2; k<i;k++){
                if(i % k == 0){
                   prime = 1;
                }
            }
            if(prime === 0 || i === 1){
                PrimeNumber.primeNumber.numbers.push(i);
                counter++;
            }
            i++;
            prime = 0;
        }
        return PrimeNumber.primeNumber.numbers;
    }


    getPrimesOnRange(n:number, m:number){
        let prime = 0;
        for (let i = n; i<m; i++){
            for(let k = 2; k<i;k++){
                if(i % k == 0){
                   prime = 1;
                }
            }
            if(prime === 0 || i === 1){
                PrimeNumber.primeNumber.range.push(i);  
            }
            prime = 0;
        }

        return PrimeNumber.primeNumber.range;
    }

    addNumbers(item: primeNumberItem){
        PrimeNumber.primeNumber.items.push(item);
    }
    getNumbers(){
        return PrimeNumber.primeNumber.items
    }
}