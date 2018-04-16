const { assert } = require('chai')

// Etape 1 : Création de l'objet
describe("Étape 1: l'objet BULLETIN", () => {

    const bulletin = null

    it("BULLETIN est un objet", () => {
      assert.isObject(bulletin, "BULLETIN n'est pas un objet");
    });
    
    it("BULLETIN possède les cinq propriétés \"partie\", \"notes\", \"points\", \"eliminer\", \"moyenne\"", () => {
      assert.containsAllKeys(bulletin, ["partie", "notes", "points", "eliminer", "moyenne"], "Il manque une ou plusieurs propriétés")
    });

    it("La propriété \"partie\" existe", () => {
      assert.typeOf(bulletin.partie, "string", "La propriété \"partie\" n'est pas une chaîne de caractères");
    });

    it("La propriété \"partie\" vaut bien \"Partie 1\"", () => {
        assert.propertyVal(bulletin, "partie", "Partie 1", "La propriété \"partie\" n'a pas la valeur escomptée")
    });

    it("La propriété \"notes\" est bel et bien un tableau", () => {
        assert.typeOf(bulletin.notes, "array", "La propriété \"notes\" n'est pas un tableau");
      });

    it("La propriété \"notes\" est un tableau vide", () => {
        assert.isEmpty(bulletin.notes, "La propriété \"notes\" n'est pas un tableau vide")
    });

    it("La propriété \"points\" est un entier initialisé à 0", () => {
        assert.strictEqual(bulletin.points, 0, "La propriété \"points\" n'est pas initialisée à 0")
    });

    it("La propriété \"eliminer\" est un booléen initialisé à false", () => {
        assert.equal(bulletin.eliminer, false, "La propriété \"eliminer\" n'est pas initialisée à \"false\"")
    });

    it("La propriété \"moyenne\" est un booléen initialisé à false", () => {
        assert.equal(bulletin.moyenne, false, "La propriété \"moyenne\" n'est pas initialisée à \"false\"")
    });
});

describe("Étape 2: les notes aléatoires", () => {
    const bulletin = null

    // 10 éléments dans le tableau
    it("Il y a 10 éléments dans le tableau de la propriété \"notes\"", () => {
        assert.equal(bulletin["notes"].length, 10, `Il n'y a que ${bulletin["notes"].length} éléments dans le tableau`)
    })

    // Valeurs comprises entre 0 et 20
    for (let j = 0; j < 10; j++) {
        it(`L'élément numéro ${j} est supérieur ou égal à 0`, () => {
            assert.isAtLeast(bulletin["notes"][j], 0, `La valeur de l'index numéro ${j} est négative`)
        })
        it(`L'élément numéro ${j} est inférieur ou égal à 20.`, () => {
            assert.isAtMost(bulletin["notes"][j], 20, `La valeur de l'index numéro ${j} est au-delà de 20. Elle est égale à ${bulletin["notes"][j]}`)
        })
    }
});

describe("Étape 3: les points au-dessus de 10", () => {

    const bulletin = {
        partie: "Partie 1",
        notes: [],
        points: 0,
        eliminer: false,
        moyenne: false,
        reset: function() {
            this.partie = "Partie 1",
            this.notes = [],
            this.points = 0,
            this.eliminer = false,
            this.moyenne = false;
        }
    }

    for (let k = 0; k < bulletin["notes"].length; k++) {
        if (bulletin["notes"][k] > 10) {
            bulletin["points"] += bulletin["notes"][k] - 10
        }
    }
    
    it("Le nombre de points est un number", () => {
        assert.typeOf(bulletin["points"], "number", `La propriété \"points\" n'est pas un nombre, mais un ${typeof(bulletin["points"])}`)
    })

    it('Doit avoir un point par note supérieur à 10', () => {
        assert.propertyVal(bulletin, 'points', bulletin.notes.filter(note => note > 10).length)
    })
})
