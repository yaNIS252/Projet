
document.addEventListener('DOMContentLoaded', function() {


const exercises = [
    {
        id: 1,
        solution: `function sum(a, b) { return a + b; }`,
        demo: () => {
            const a = parseFloat(prompt("Entrez le premier nombre :"));
            const b = parseFloat(prompt("Entrez le deuxième nombre :"));
            alert(`La somme est : ${a + b}`);
        }
    },
    {
        id: 2,
        solution: `function printNumbers() { for (let i = 1; i <= 10; i++) { console.log(i); } }`,
        demo: () => {
            alert("Regardez dans la console !");
            for (let i = 1; i <= 10; i++) {
                console.log(i);
            }
        }
    },
    {
        id: 3,
        solution: `function max(a, b) { return a > b ? a : b; }`,
        demo: () => {
            const a = parseFloat(prompt("Entrez le premier nombre :"));
            const b = parseFloat(prompt("Entrez le deuxième nombre :"));
            alert(`Le plus grand est : ${Math.max(a, b)}`);
        }
    },
    {
        id: 4,
        solution: `function isEven(num) { return num % 2 === 0; }`,
        demo: () => {
            const num = parseInt(prompt("Entrez un nombre :"));
            alert(`${num} est ${num % 2 === 0 ? "pair" : "impair"}`);
        }
    },
    {
        id: 5,
        solution: `function countVowels(str) { const vowels = 'aeiouAEIOU'; return str.split('').filter(char => vowels.includes(char)).length; }`,
        demo: () => {
            const str = prompt("Entrez une chaîne :");
            const count = str.match(/[aeiou]/gi)?.length || 0;
            alert(`Nombre de voyelles : ${count}`);
        }
    },
    {
        id: 6,
        solution: `function factorial(n) { return n === 0 ? 1 : n * factorial(n - 1); }`,
        demo: () => {
            const n = parseInt(prompt("Entrez un nombre :"));
            let result = 1;
            for (let i = 1; i <= n; i++) {
                result *= i;
            }
            alert(`La factorielle de ${n} est : ${result}`);
        }
    },
    {
        id: 7,
        solution: `function isPalindrome(str) { const reversed = str.split('').reverse().join(''); return str === reversed; }`,
        demo: () => {
            const str = prompt("Entrez une chaîne :");
            alert(`${str} est ${str === str.split('').reverse().join('') ? "un palindrome" : "pas un palindrome"}`);
        }
    },
    {
        id: 8,
        solution: `function multiplicationTable(num) { const table = []; for (let i = 1; i <= 10; i++) { table.push(\`\${num} x \${i} = \${num * i}\`); } return table.join('\\n'); }`,
        demo: () => {
            const num = parseInt(prompt("Entrez un nombre :"));
            alert(`Table de multiplication de ${num} :\n${multiplicationTable(num)}`);
        }
    },
    {
        id: 9,
        solution: `function square(num) { return num * num; }`,
        demo: () => {
            const num = parseInt(prompt("Entrez un nombre :"));
            alert(`Le carré de ${num} est : ${square(num)}`);
        }
    },
    {
        id: 10,
        solution: `function sortArray(arr) { return arr.sort((a, b) => a - b); }`,
        demo: () => {
            const arr = prompt("Entrez un tableau d'entiers (séparés par des virgules) :").split(',').map(Number);
            alert(`Tableau trié : ${sortArray(arr)}`);
        }
    },
    {
        id: 11,
        solution: `function contains(arr, element) { return arr.includes(element); }`,
        demo: () => {
            const arr = prompt("Entrez un tableau d'éléments (séparés par des virgules) :").split(',');
            const element = prompt("Entrez l'élément à rechercher :");
            alert(arr.includes(element) ? `${element} existe dans le tableau.` : `${element} n'existe pas dans le tableau.`);
        }
    },
    {
        id: 12,
        solution: `function concatenateArrays(arr1, arr2) { return arr1.concat(arr2); }`,
        demo: () => {
            const arr1 = prompt("Entrez le premier tableau (séparés par des virgules) :").split(',');
            const arr2 = prompt("Entrez le deuxième tableau (séparés par des virgules) :").split(',');
            alert(`Tableau concaténé : ${concatenateArrays(arr1, arr2)}`);
        }
    },
    {
        id: 13,
        solution: `function countWords(str) { return str.trim().split(/\s+/).length; }`,
        demo: () => {
            const str = prompt("Entrez une chaîne de texte :");
            alert(`Le nombre de mots dans la chaîne est : ${countWords(str)}`);
        }
    },
    {
        id: 14,
        solution: `function filterEvenNumbers(arr) { return arr.filter(num => num % 2 === 0); }`,
        demo: () => {
            const arr = prompt("Entrez un tableau d'entiers (séparés par des virgules) :").split(',').map(Number);
            alert(`Nombres pairs : ${filterEvenNumbers(arr)}`);
        }
    },
    {
        id: 15,
        solution: `function calculateAverage(arr) { return arr.reduce((acc, num) => acc + num, 0) / arr.length; }`,
        demo: () => {
            const arr = prompt("Entrez un tableau de nombres (séparés par des virgules) :").split(',').map(Number);
            alert(`La moyenne des nombres est : ${calculateAverage(arr)}`);
        }
    }
];

// Lier les boutons aux fonctionnalités
exercises.forEach(exercise => {
    const solutionButton = document.getElementById(`solution${exercise.id}`);
    const demoButton = document.getElementById(`demo${exercise.id}`);

    if (solutionButton) {
        solutionButton.addEventListener('click', () => {
            alert(`Solution :\n${exercise.solution}`);
        });
    }

    if (demoButton) {
        demoButton.addEventListener('click', () => {
            exercise.demo();
        });
    }
});
});
