import inquirer from "inquirer";

let students = [];
let com_fees = 5000;
let engir_fees = 6000;
let madical_fees = 7000;








let condition = true

while (condition  ) {
    const answers = await inquirer.prompt({
        name: "course",
        type: "list",
        message: "Choose Course For Apply",
        choices: ["Computer Course", "Engineer Course", "Medical Course"]
    })


    if (answers.course === "Computer Course") {
        const fees = await inquirer.prompt({
            name: "course_fees",
            type: "number",
            message: " This course Fees is 5000 pay ."

        })
        console.log(fees)
        if (fees.course_fees >= 5000) {
            const questions =  await inquirer.prompt([{
                name: "name",
                type: "input",
                message: "What is your name ? "
            }, {
                name: "age",
                type: "input",
                message: "What is your age ? "
            },

            ])


            let balance = fees.course_fees - com_fees;
            let ID ={ ID : Math.floor(Math.random() * 10000)};

            let data = {
                ...questions,
                ...ID,

            }

            if (balance == 0) {

            } else {
                console.log("Your Balance money " + balance)
            }

            students.push(data)
             let backpage = await inquirer.prompt({
                name: "backe",
                type: "confirm",
                message: "Back To Home Page",
                default: "false"
            })
             if (backpage.backe === false){
                condition = false
            }
        }

    }
    if (answers.course === "Engineer Course") {
        const fees = await inquirer.prompt({
            name: "course_fees",
            type: "number",
            message: " This course Fees is 6000 pay ."
        })
        console.log(fees)
        if (fees.course_fees >= 6000) {
            const questions = await inquirer.prompt([{
                name: "name",
                type: "input",
                message: "What is your name ? "
            }, {
                name: "age",
                type: "input",
                message: "What is your age ? "
            }
            ])
            let balance = fees.course_fees - engir_fees;
            let ID2 ={ ID : Math.floor(Math.random()*10000)}
             let data = {
                ...questions,
                ...ID2,

            }

            students.push(data)
            if (balance == 0) {

            } else {
                console.log("Your Balance money " + balance)
            }
             let backpage = await inquirer.prompt({
                name: "backe",
                type: "confirm",
                message: "Back To Home Page",
                default: "false"
            })
             if (backpage.backe === false){
                condition = false
            }
        }


    }
    if (answers.course === "Medical Course") {
        const fees = await inquirer.prompt({
            name: "course_fees",
            type: "number",
            message: " This course Fees is 7000 pay ."
        })
        console.log(fees)
        if (fees.course_fees >= 6000) {
            const questions = await inquirer.prompt([{
                name: "name",
                type: "input",
                message: "What is your name ? "
            }, {
                name: "age",
                type: "input",
                message: "What is your age ? "
            }
            ])
            let balance = fees.course_fees - madical_fees;
            let ID3 ={ ID : Math.floor(Math.random()*10000)}
             let data = {
                ...questions,
                ...ID3,

            }

            students.push(data)
            if (balance == 0) {

            } else {
                console.log("Your Balance money " + balance)
            }
            let backpage = await inquirer.prompt({
                name: "backe",
                type: "confirm",
                message: "Back To Home Page",
                default: "false"
            })
            if (backpage.backe === false){
                condition = false
            }


        }


    }


    console.log(students)

}
