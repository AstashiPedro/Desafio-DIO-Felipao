
let nome = "Ichigo"
let XP = 2000
let nivel = ""

console.log("O seu personagem " + nome + " está no Nível")

    if (XP >= 0 && XP < 1000) {
        nivel = "Ferro"
    } else if (XP >= 1000 && XP <= 2000) {
        nivel = "Bronze"
    } else if (XP >= 2000 && XP <= 5000) {
        nivel = "Prata"
    } else if (XP >= 5000 && XP <= 7000) {
        nivel = "Ouro"
    } else if (XP >= 7000 && XP <= 8000) {
        nivel = "Platina"
    } else if (XP >= 8000 && XP <= 9000) {
        nivel = "Ascendente"
    } else if (XP >= 9000 && XP <= 10000) {
        nivel = "Imortal"
    } else if (XP >= 10000) {
        nivel = "Radiante"
    }

    for(XP <= 0; XP <= 10000; XP += 120){
        if (XP >= 0 && XP < 1000) {
            nivel = "Ferro"
        } else if (XP >= 1000 && XP <= 2000) {
            nivel = "Bronze"
        } else if (XP >= 2000 && XP <= 5000) {
            nivel = "Prata"
        } else if (XP >= 5000 && XP <= 7000) {
            nivel = "Ouro"
        } else if (XP >= 7000 && XP <= 8000) {
            nivel = "Platina"
        } else if (XP >= 8000 && XP <= 9000) {
            nivel = "Ascendente"
        } else if (XP >= 9000 && XP <= 10000) {
            nivel = "Imortal"
        } else if (XP >= 10000) {
            nivel = "Radiante"
        }
        console.log("Upgrade...." + XP + " : " + nivel)
      }

      if (XP >= 0 && XP < 1000) {
        nivel = "Ferro"
    } else if (XP >= 1000 && XP <= 2000) {
        nivel = "Bronze"
    } else if (XP >= 2000 && XP <= 5000) {
        nivel = "Prata"
    } else if (XP >= 5000 && XP <= 7000) {
        nivel = "Ouro"
    } else if (XP >= 7000 && XP <= 8000) {
        nivel = "Platina"
    } else if (XP >= 8000 && XP <= 9000) {
        nivel = "Ascendente"
    } else if (XP >= 9000 && XP <= 10000) {
        nivel = "Imortal"
    } else if (XP >= 10000) {
        nivel = "Radiante"
    }

      console.log("O seu personagem: " + nome + " está no nível: " + XP + ": " + nivel)
