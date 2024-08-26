export const projectsSchema = {
    slug: 'projects',
    access: {
        read: ()=>true
    },
    fields: [
        {
            name: 'projects',
            type: 'array',
            label: 'Projects',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true
                },
                {
                    name: 'projectDescription',
                    type: 'textarea',
                    required: true
                },
                {
                    name: 'githubLink',
                    type: 'text',
                    required: true
                },
                {
                    name: 'channelLink',
                    type: 'text',
                    required: true
                },
                {
                    name: 'contributor',
                    type: 'text',
                    required: true
                },
                {
                    name: 'skills',
                    type: 'text',
                    required: true
                },
                {
                    name: 'mentor',
                    type: 'text',
                    required: true
                },
                {
                    name: 'year',
                    type: 'text',
                    required: true
                }
            ]
        }
    ]
};
