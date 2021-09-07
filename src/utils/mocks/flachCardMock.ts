export const flashCardsMock =
{
    _id: "111111111111111111111111111111",
    title: "title 1",
    tag: ["tag 1-1", "tag 1-2", "tag 1-3"],
    subtitle: [
        {
            title: "définition 1 - 1",
            position: 1,
            paragraph: [
                {
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam nunc leo, non porttitor est placerat in. Nunc luctus urna non quam ornare, non blandit neque lacinia. Vestibulum commodo laoreet sollicitudin. Cras vulputate justo eget nunc ornare, interdum lobortis dolor finibus. Nunc eu bibendum turpis. Nullam sagittis dui eu blandit consectetur. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tortor luctus, aliquam quam sed, auctor nisl. Ut varius pretium nibh, eu rutrum sem scelerisque eget",
                }
            ]
        },
        {
            title: "définition 1 - 2",
            position: 2,
            paragraph: [
                {
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam nunc leo, non porttitor est placerat in. Nunc luctus urna non quam ornare, non blandit neque lacinia. Vestibulum commodo laoreet sollicitudin. Cras vulputate justo eget nunc ornare, interdum lobortis dolor finibus. Nunc eu bibendum turpis. Nullam sagittis dui eu blandit consectetur. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tortor luctus, aliquam quam sed, auctor nisl. Ut varius pretium nibh, eu rutrum sem scelerisque eget",
                }
            ]
        }, {
            title: "définition 1 - 3",
            position: 3,
            paragraph: [
                {
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam nunc leo, non porttitor est placerat in. Nunc luctus urna non quam ornare, non blandit neque lacinia. Vestibulum commodo laoreet sollicitudin. Cras vulputate justo eget nunc ornare, interdum lobortis dolor finibus. Nunc eu bibendum turpis. Nullam sagittis dui eu blandit consectetur. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tortor luctus, aliquam quam sed, auctor nisl. Ut varius pretium nibh, eu rutrum sem scelerisque eget",
                }
            ]
        },
    ],
    ressource: [
        {
            name: "interesting 1-1",
            url: "url 1 - 1"
        },
        {
            name: "interesting 1-2",
            url: "url 1 - 2"
        }
    ]
}























/* export const flashCardsMock = [
    {
        _id: "111111111111111111111111111111",
        title: "title 1",
        tag: ["tag 1-1", "tag 1-2", "tag 1-3"],
        subtitle: [
            {
                title: "définition 1 - 1",
                position: 1,
                paragraph: [
                    {
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam nunc leo, non porttitor est placerat in. Nunc luctus urna non quam ornare, non blandit neque lacinia. Vestibulum commodo laoreet sollicitudin. Cras vulputate justo eget nunc ornare, interdum lobortis dolor finibus. Nunc eu bibendum turpis. Nullam sagittis dui eu blandit consectetur. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tortor luctus, aliquam quam sed, auctor nisl. Ut varius pretium nibh, eu rutrum sem scelerisque eget",
                    }
                ]
            },
            {
                title: "définition 1 - 2",
                position: 2,
                paragraph: [
                    {
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam nunc leo, non porttitor est placerat in. Nunc luctus urna non quam ornare, non blandit neque lacinia. Vestibulum commodo laoreet sollicitudin. Cras vulputate justo eget nunc ornare, interdum lobortis dolor finibus. Nunc eu bibendum turpis. Nullam sagittis dui eu blandit consectetur. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tortor luctus, aliquam quam sed, auctor nisl. Ut varius pretium nibh, eu rutrum sem scelerisque eget",
                    }
                ]
            }, {
                title: "définition 1 - 3",
                position: 3,
                paragraph: [
                    {
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam nunc leo, non porttitor est placerat in. Nunc luctus urna non quam ornare, non blandit neque lacinia. Vestibulum commodo laoreet sollicitudin. Cras vulputate justo eget nunc ornare, interdum lobortis dolor finibus. Nunc eu bibendum turpis. Nullam sagittis dui eu blandit consectetur. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tortor luctus, aliquam quam sed, auctor nisl. Ut varius pretium nibh, eu rutrum sem scelerisque eget",
                    }
                ]
            },
        ],
        ressource: [
            {
                name: "interesting 1-1",
                url: "url 1 - 1"
            },
            {
                name: "interesting 1-2",
                url: "url 1 - 2"
            }
        ]
    },
    {
        _id: "222222222222222222222222222222222",
        title: "title 2",
        tag: ["tag 2-1", "tag 1-2", "tag 2-3"],
        subtitle: [
            {
                title: "définition 2",
                position: 1,
                paragraph: [
                    {
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam nunc leo, non porttitor est placerat in. Nunc luctus urna non quam ornare, non blandit neque lacinia. Vestibulum commodo laoreet sollicitudin. Cras vulputate justo eget nunc ornare, interdum lobortis dolor finibus. Nunc eu bibendum turpis. Nullam sagittis dui eu blandit consectetur. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tortor luctus, aliquam quam sed, auctor nisl. Ut varius pretium nibh, eu rutrum sem scelerisque eget",
                    }
                ]
            },
            {
                title: "définition 2 - 2",
                position: 2,
                paragraph: [
                    {
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam nunc leo, non porttitor est placerat in. Nunc luctus urna non quam ornare, non blandit neque lacinia. Vestibulum commodo laoreet sollicitudin. Cras vulputate justo eget nunc ornare, interdum lobortis dolor finibus. Nunc eu bibendum turpis. Nullam sagittis dui eu blandit consectetur. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tortor luctus, aliquam quam sed, auctor nisl. Ut varius pretium nibh, eu rutrum sem scelerisque eget",
                    }
                ]
            }, {
                title: "définition 2 - 3",
                position: 3,
                paragraph: [
                    {
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam nunc leo, non porttitor est placerat in. Nunc luctus urna non quam ornare, non blandit neque lacinia. Vestibulum commodo laoreet sollicitudin. Cras vulputate justo eget nunc ornare, interdum lobortis dolor finibus. Nunc eu bibendum turpis. Nullam sagittis dui eu blandit consectetur. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tortor luctus, aliquam quam sed, auctor nisl. Ut varius pretium nibh, eu rutrum sem scelerisque eget",
                    }
                ]
            },
        ],
        ressource: [
            {
                name: "interesting 2-1",
                url: "url 2 - 1"
            },
            {
                name: "interesting 1-2",
                url: "url 2 - 2"
            }
        ]
    },
    {
        _id: "333333333333333333333333333333",
        title: "title 3",
        tag: ["tag 3-1", "tag 3-2", "tag 2-3"],
        subtitle: [
            {
                title: "définition 3 - 1",
                position: 1,
                paragraph: [
                    {
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam nunc leo, non porttitor est placerat in. Nunc luctus urna non quam ornare, non blandit neque lacinia. Vestibulum commodo laoreet sollicitudin. Cras vulputate justo eget nunc ornare, interdum lobortis dolor finibus. Nunc eu bibendum turpis. Nullam sagittis dui eu blandit consectetur. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tortor luctus, aliquam quam sed, auctor nisl. Ut varius pretium nibh, eu rutrum sem scelerisque eget",
                    }
                ]
            },
            {
                title: "définition 3 - 2",
                position: 2,
                paragraph: [
                    {
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam nunc leo, non porttitor est placerat in. Nunc luctus urna non quam ornare, non blandit neque lacinia. Vestibulum commodo laoreet sollicitudin. Cras vulputate justo eget nunc ornare, interdum lobortis dolor finibus. Nunc eu bibendum turpis. Nullam sagittis dui eu blandit consectetur. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tortor luctus, aliquam quam sed, auctor nisl. Ut varius pretium nibh, eu rutrum sem scelerisque eget",
                    }
                ]
            }, {
                title: "définition 3 - 3",
                position: 3,
                paragraph: [
                    {
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam nunc leo, non porttitor est placerat in. Nunc luctus urna non quam ornare, non blandit neque lacinia. Vestibulum commodo laoreet sollicitudin. Cras vulputate justo eget nunc ornare, interdum lobortis dolor finibus. Nunc eu bibendum turpis. Nullam sagittis dui eu blandit consectetur. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tortor luctus, aliquam quam sed, auctor nisl. Ut varius pretium nibh, eu rutrum sem scelerisque eget",
                    }
                ]
            },
        ],
        ressource: [
            {
                name: "interesting 3-1",
                url: "url 3 - 1"
            },
            {
                name: "interesting 1-2",
                url: "url 3 - 2"
            }
        ]
    },
    {
        _id: "111111111111111111111111111111",
        title: "title 4",
        tag: ["tag 4-1", "tag 4-2", "tag 4-3"],
        subtitle: [
            {
                title: "définition 4 - 1",
                position: 1,
                paragraph: [
                    {
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam nunc leo, non porttitor est placerat in. Nunc luctus urna non quam ornare, non blandit neque lacinia. Vestibulum commodo laoreet sollicitudin. Cras vulputate justo eget nunc ornare, interdum lobortis dolor finibus. Nunc eu bibendum turpis. Nullam sagittis dui eu blandit consectetur. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tortor luctus, aliquam quam sed, auctor nisl. Ut varius pretium nibh, eu rutrum sem scelerisque eget",
                    }
                ]
            },
            {
                title: "définition 4 - 2",
                position: 2,
                paragraph: [
                    {
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam nunc leo, non porttitor est placerat in. Nunc luctus urna non quam ornare, non blandit neque lacinia. Vestibulum commodo laoreet sollicitudin. Cras vulputate justo eget nunc ornare, interdum lobortis dolor finibus. Nunc eu bibendum turpis. Nullam sagittis dui eu blandit consectetur. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tortor luctus, aliquam quam sed, auctor nisl. Ut varius pretium nibh, eu rutrum sem scelerisque eget",
                    }
                ]
            }, {
                title: "définition 4 - 3",
                position: 3,
                paragraph: [
                    {
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam nunc leo, non porttitor est placerat in. Nunc luctus urna non quam ornare, non blandit neque lacinia. Vestibulum commodo laoreet sollicitudin. Cras vulputate justo eget nunc ornare, interdum lobortis dolor finibus. Nunc eu bibendum turpis. Nullam sagittis dui eu blandit consectetur. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tortor luctus, aliquam quam sed, auctor nisl. Ut varius pretium nibh, eu rutrum sem scelerisque eget",
                    }
                ]
            },
        ],
        ressource: [
            {
                name: "interesting 4-1",
                url: "url 4 - 1"
            },
            {
                name: "interesting 1-2",
                url: "url 4 - 2"
            }
        ]
    }
] */