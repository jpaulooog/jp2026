// Lista de perguntas estruturadas com 'proxima' para o Fluxograma (Aula 1 e Aula 7)
export const perguntas = [
    {
        enunciado: "Assim que saiu da escola, você se depara com uma nova tecnologia: um chat que consegue responder a todas as dúvidas que uma pessoa pode ter. Além disso, o chat também gera imagens e áudios hiper-realistas. Qual o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: [
                    "No início, ficou com medo do que essa tecnologia pode fazer.",
                    "Achou assustador pensar na velocidade com que a tecnologia avança."
                ],
                proxima: 1 // Direciona para o passo 1 do fluxo
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: [
                    "Quis saber como usar IA no seu dia a dia.",
                    "Pensou que a IA pode ajudar em várias tarefas rotineiras."
                ],
                proxima: 2 // Direciona para o passo 2 do fluxo
            }
        ]
    },
    {
        enunciado: "Utilizar uma IA pode ser aterrorizante mesmo. Uma professora de tecnologia decidiu fazer uma sequência de aulas sobre IA e pediu para você escrever um trabalho. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utilizar uma ferramenta de busca que usa IA para ajudar a encontrar e resumir informações.",
                afirmacao: [
                    "Percebeu que a IA consegue explicar termos complicados de forma simplificada.",
                    "Aproveitou a tecnologia para agilizar suas pesquisas acadêmicas."
                ],
                proxima: 3
            },
            {
                texto: "Escrever o trabalho com base em conversas com colegas e pesquisas tradicionais.",
                afirmacao: [
                    "Acha que os meios tradicionais são mais confiáveis para a produção de conhecimento.",
                    "Valorizou o debate humano e a troca direta de ideias com seus pares."
                ],
                proxima: 3
            }
        ]
    },
    {
        enunciado: "A IA traz muitas facilidades para o cotidiano. Sua professora passa um trabalho sobre o uso ético dessas ferramentas. O que você faz?",
        alternativas: [
            {
                texto: "Cria um grupo de estudos com os colegas para discutir o uso ético da IA.",
                afirmacao: [
                    "Sua preocupação com o impacto social o motivou a liderar debates sobre ética.",
                    "Decidiu conscientizar as pessoas sobre as armadilhas e benefícios da tecnologia."
                ],
                proxima: 3
            },
            {
                texto: "Usa ferramentas digitais de arte para ilustrar como a IA imagina o futuro das profissões.",
                afirmacao: [
                    "Decidiu compartilhar seus conhecimentos usando softwares de pintura digital para iniciantes.",
                    "Ajudou a aproximar pessoas leigas do universo tecnológico através da expressão visual."
                ],
                proxima: 3
            }
        ]
    },
    {
        enunciado: "Chegamos ao final da jornada! Como você avalia a sua interação com as transformações tecnológicas atuais?",
        alternativas: [
            {
                texto: "Acredito que precisamos evoluir junto com as ferramentas mantendo o controle humano.",
                afirmacao: "Lutará ativamente para abrir caminhos onde a tecnologia sirva ao bem-estar humano."
                // Sem 'proxima' definida para acionar o final (undefined)
            },
            {
                texto: "Prefiro manter um equilíbrio saudável, valorizando habilidades manuais e artísticas.",
                afirmacao: "Continuará estimulando a criatividade orgânica e a essência humana nas redes sociais."
                // Sem 'proxima' definida para acionar o final (undefined)
            }
        ]
    }
];
