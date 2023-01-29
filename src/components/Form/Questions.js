import { type } from "@testing-library/user-event/dist/type";

export const questions = [
  {
    section: 1,
    items: [
      {
        label: 'Quel est le nom de votre entreprise ?',
        type: 'text',
        value: 'nom'
      },

    ]
  },

  {
    section: 2,
    items: [
      {
        label: "Quel est le lieu du siege de l'entreprise? ",
        type: 'text',
        value: 'lieu'
      },
      // {
      //   label: 'City',
      //   type: 'text',
      //   value: 'city'
      // },
      // {
      //   label: 'State',
      //   type: 'select',
      //   value: 'state',
      //   options: [ 'State 1', 'State 2']
      // }
    ]
  },
  {
    section: 3,
    items: [
      {
        label: 'contact',
        type: 'text',
        value: 'contact'
      },

    ]
  },
  
  {
    section: 4,
    items: [
      {
        label: 'Veuillez entrer la date de creation',
        type: 'text',
        value: 'date'
      },

    ]
  },

  {
    section: 5,
    items: [
 {
        label: "DISTRICT D'ABIDJAN",
        type: 'select',
        value: 'District Abidjan ',
        options: [ 'DISTRICT DE YAMOUSSOUKRO', 'PORO (CHEF LIEU KORHOGO)'
        ,'BAS SASSANDRA (CHEF LIEU DALOA)',
        'GBEKE (CHEF LIEU BOUAKE)','GRANDS PONTS (CHEF LIEU DABOU)']
      }
    ]
  },

  {
    section: 6,
    items: [
      {
        label: 'Veuillez entrer votre Ville',
        type: 'text',
        value: 'ville'
      },

    ]
  },

  {
    section: 7,
    items: [
      {
        label: 'Veuillez entrer votre localisation:Commune',
        type: 'text',
        value: 'commune'
      },

    ]
  },

  {
    section: 8,
    items: [
 {
        label: "MICRO ENTREPRISE (Chiffre d'affaires annuel hors taxes  ⩽30 Millions FCFA)",
        type: 'select',
        value: 'type ',
        options: [ "PETITE ENTREPRISE (Chiffre d'affaires annuel hors taxes ⩽ 150 Millions FCFA)",
         "MOYENNE  ENTREPRISE (Chiffre d'affaires annuel hors taxes >150 Millions ⩽ 1 Milliard FCFA)"
        ]
      }
    ]
  },

  {
    section: 9,
    items: [
 {
        label: "SA",
        type: 'select',
        value: 'forme juridique ',
        options: [ "SARL", "ENTREPRISE INDIVIDUELLE", "SOCIETE COOPERATIVE", "ASSOCIATION",
        ]
      }
    ]
  },

  {
    section: 10,
    items: [
 {
        label: "COMMERCE",
        type: 'select',
        value: 'forme juridique ',
        options: [ "INDUSTRIE", "SERVICE"]
      }
    ]
  },

  {
    section: 11,
    items: [
      {
        label: 'Veuillez decrire votre activitee principale',
        type: 'text',
        value: 'activite'
      },

    ]
  },

  {
    section: 12,
    items: [
 {
        label: "REGISTRE DE COMMERCE",
        type: 'select',
        value: 'documents legaux',
        options: [ "DECLARATION FISCALE D'EXISTENCE", "STATUTS",
         "ETATS FINANCIERS (BILAN, COMPTE DE RESULTAT ...)", "INFORMEL",
        ]
      }
    ]

  },    

  {
    section:13,
    items: [
 {
        label: "RÉGIME FISCAL",
        type: 'select',
        value: 'regime fiscal',
        options: [ "TAXE COMMUNALE DE L'ENTREPRENANT","TAXE D'ENTREPRENANT D'ETAT",
         "REGIME DES MICROENTREPRISES", "REGIME DU REEL NORMAL","REGIME DU REEL SIMPLIFIE",
         "INFORMEL"
        ]
      }
    ]
    
  },    

  {
    section: 14,
    items: [
      {
        label: "Nombres d'employes y compris le dirigeant",
        type: 'text',
        value: 'employes totaux'
      },

    ]
  },
  {
    section: 15,
    items: [
      {
        label: "Nombres d'employes femmes",
        type: 'text',
        value: 'femmes'
      },

    ]
  },
  {
    section: 16,
    items: [
      {
        label: "Nombres d'employes hommes",
        type: 'text',
        value: 'hommes'
      },

    ]
  },

  {
    section: 17,
    items: [
      {
        label: 'Si vous êtes prêt à soumettre, veuillez appuyer sur  Valider',
        type: 'information'
      }
    ]
  }
]
