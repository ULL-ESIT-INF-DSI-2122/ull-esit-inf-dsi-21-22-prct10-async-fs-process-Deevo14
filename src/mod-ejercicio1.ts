/**
 * Funcion para convertir cadenas de ADN a ARN
 * @param adn array de strings de cadenas de adn
 * @returns 
 * 
 */
function adnToArn(adn:string[]):string[] | undefined{
    let arn:string[] = [];
    let arnaux:string = '';

    for(let i:number = 0; i < adn.length; i++){
        let adnaux:string = adn[i];
        for(let j:number = 0; j < adnaux.length; j++){
            switch(adnaux[j]){
                case 'A':{
                    arnaux += 'U';
                    break;
                }
                case 'C':{
                    arnaux += 'G';
                    break;
                }
                case 'G':{
                    arnaux += 'C';
                    break;
                }
                case 'T':{
                    arnaux += 'A';
                    break;
                }
                default:{
                    return undefined;
                }
            }
        }

    arn[i] = arnaux;
    arnaux = '';
    }

    return arn;
}

function  arnToAdn(arn:string[]):string[] | undefined{
    let adn:string[] = [];
    let adnaux:string = '';

    for(let i:number = 0; i < arn.length; i++){
        let arnaux:string = arn[i];
        for(let j:number = 0; j < arnaux.length; j++){
            switch(arnaux[j]){
                case 'A':{
                    adnaux += 'T';
                    break;
                }
                case 'C':{
                    adnaux += 'G';
                    break;
                }
                case 'G':{
                    adnaux += 'C';
                    break;
                }
                case 'U':{
                    adnaux += 'A';
                    break;
                }
                default:{
                    return undefined;
                }
            }
        }

    adn[i] = adnaux;
    adnaux = '';
    }

    return adn;
}

console.log(`${adnToArn(['ACGTATGC','TTACGGCAT','ACTGC'])}`);
console.log(`${arnToAdn(['ACGGUAGU','GUCAAUCAGG'])}`);
