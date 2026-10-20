// Vos données : vous pouvez en ajouter autant que vous voulez ici facilement !
const faqData = [
    {
        number: "01",
        question: "Qu'est-ce qu'un bilan carbone ou un bilan GES ?",
        answer: "Un bilan carbone permet d'évaluer les émissions de gaz à effet de serre liées à l'activité d'une organisation. Il prend notamment en compte les consommations d'énergie, les achats, les déplacements, le transport ou encore les déchets, selon le périmètre retenu.<br><br>L'objectif est de mieux comprendre d'où proviennent les émissions et d'identifier les actions à mettre en place pour les réduire."
    },
    {
        number: "02",
        question: "Quelles données faut-il préparer pour réaliser un bilan carbone ?",
        answer: "Les données nécessaires dépendent de votre activité et de la taille de votre organisation. Il peut s’agir de factures d’énergie, de données sur les déplacements, des achats, du transport, des déchets ou encore des consommations de carburant. <br><br>Il n’est pas nécessaire de tout maîtriser dès le départ. Nous vous aidons à identifier les informations utiles et à organiser leur collecte afin de faciliter la démarche."
    },
    {
        number: "03",
        question: "Combien de temps faut-il pour réaliser un bilan carbone ?",
        answer: "La durée varie selon la taille de l’organisation, le nombre de sites concernés, la disponibilité des données et la complexité de l’activité.<br><br>Lors d’un premier échange, nous faisons le point sur votre situation afin de définir un calendrier adapté. Une bonne préparation des données permet généralement de faciliter le travail et de limiter les échanges supplémentaires."
    },
    {
        number: "04",
        question: "Quelle est la différence entre un bilan carbone et un plan de décarbonation ?",
        answer: "Le bilan carbone permet de mesurer et de comprendre les émissions liées à votre activité. Le plan de décarbonation consiste ensuite à définir les actions à mettre en œuvre pour les réduire.<br><br>Les deux démarches sont complémentaires : le bilan donne une vision de départ, tandis que le plan d’action permet de passer concrètement à la réduction des émissions, avec des priorités, des échéances et des indicateurs de suivi."
    },
    {
        number: "05",
        question: "Quel est le coût d'un accompagnement carbone ?",
        answer: "Le coût dépend notamment de la taille de votre organisation, du nombre de sites, de la complexité de votre activité et du niveau d’accompagnement souhaité. <br><br>Après un premier échange, nous pouvons préciser vos besoins et vous proposer un accompagnement adapté à votre situation. L’objectif est de vous apporter une démarche utile, cohérente avec vos enjeux et vos moyens."
    },
    {
        number: "05",
        question: "Quel est le coût d'un accompagnement carbone ?",
        answer: "Le coût dépend notamment de la taille de votre organisation, du nombre de sites, de la complexité de votre activité et du niveau d’accompagnement souhaité. <br><br>Après un premier échange, nous pouvons préciser vos besoins et vous proposer un accompagnement adapté à votre situation. L’objectif est de vous apporter une démarche utile, cohérente avec vos enjeux et vos moyens."
    },
    {
        number: "06",
        question: "Comment sont protégées les données de mon entreprise ?",
        answer: "Les données transmises dans le cadre d’un accompagnement peuvent contenir des informations sensibles sur votre activité. Elles doivent donc être traitées de manière confidentielle et utilisées dans le cadre défini pour la mission.<br><br>Les modalités de transmission, d’accès et de conservation des documents sont précisées en fonction de l’accompagnement proposé. Nous vous indiquons également les informations nécessaires à la réalisation de votre bilan."
    },
    {
        number: "07",
        question: "Peut-on être accompagné après la réalisation du bilan carbone ?",
        answer: "Oui, l’accompagnement peut se poursuivre après le bilan, selon vos besoins. Il peut notamment porter sur la définition d’un plan d’action, la priorisation des mesures à mettre en œuvre et le suivi des progrès réalisés.<br><br>L’objectif est de faire vivre la démarche dans le temps et de vous aider à intégrer la réduction des émissions dans les décisions et les pratiques de votre organisation."
    },
    {
        number: "08",
        question: "Est-il possible de suivre les émissions et les progrès dans le temps ?",
        answer: "Oui. Un suivi régulier permet de comparer les résultats, d’observer l’évolution des principaux postes d’émission et de suivre l’avancement des actions engagées.<br><br>Selon vos besoins, ce suivi peut s’appuyer sur des indicateurs, des rapports périodiques ou un tableau de bord adapté à votre organisation. Les méthodes de calcul et les périmètres doivent rester cohérents pour que les comparaisons soient pertinentes."
    },
];

const faqContainer = document.getElementById('faqContainer');

faqData.forEach(item => {
    const details = document.createElement('details');
    details.classList.add('faq-item');

    details.innerHTML = `
        <summary class="faq-question">
            <span class="faq-number">${item.number}</span>
            <span class="faq-title">${item.question}</span>
            <span class="faq-icon"></span>
        </summary>
        <div class="faq-answer">
            <p>${item.answer}</p>
        </div>
    `;

    faqContainer.appendChild(details);
});