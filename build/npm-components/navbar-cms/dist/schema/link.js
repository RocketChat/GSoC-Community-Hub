import deepMerge from './deepMerge';
export const appearanceOptions = {
    primary: {
        label: 'Primary Button',
        value: 'primary'
    },
    secondary: {
        label: 'Secondary Button',
        value: 'secondary'
    },
    default: {
        label: 'Default',
        value: 'default'
    }
};
const link = ({ appearances, disableLabel = false, overrides = {} } = {})=>{
    const linkResult = {
        name: 'link',
        type: 'group',
        admin: {
            hideGutter: true
        },
        fields: [
            {
                type: 'row',
                fields: [
                    {
                        name: 'type',
                        type: 'radio',
                        options: [
                            {
                                label: 'link',
                                value: 'link'
                            },
                            {
                                label: 'dropDown',
                                value: 'dropdown'
                            }
                        ],
                        defaultValue: 'link',
                        admin: {
                            layout: 'horizontal'
                        }
                    }
                ]
            }
        ]
    };
    const linkTypes = [
        {
            name: 'link',
            label: 'url',
            type: 'text',
            required: true,
            admin: {
                condition: (_, siblingData)=>{
                    var _siblingData;
                    return ((_siblingData = siblingData) == null ? void 0 : _siblingData.type) === 'link';
                }
            }
        },
        {
            name: 'dropdown',
            label: 'dropdown',
            type: 'array',
            minRows: 2,
            maxRows: 10,
            admin: {
                condition: (_, siblingData)=>{
                    var _siblingData;
                    return ((_siblingData = siblingData) == null ? void 0 : _siblingData.type) === 'dropdown';
                }
            },
            fields: [
                // required
                {
                    name: 'url',
                    label: "url",
                    type: 'text',
                    required: true
                },
                {
                    name: 'label',
                    label: 'label',
                    type: 'text',
                    required: true
                }
            ]
        }
    ];
    if (!disableLabel) {
        linkTypes.map((linkType)=>({
                ...linkType,
                admin: {
                    ...linkType.admin,
                    width: '50%'
                }
            }));
        linkResult.fields.push({
            type: 'row',
            fields: [
                ...linkTypes,
                {
                    name: 'label',
                    label: 'Label',
                    type: 'text',
                    required: true,
                    admin: {
                        width: '50%'
                    }
                }
            ]
        });
    } else {
        linkResult.fields = [
            ...linkResult.fields,
            ...linkTypes
        ];
    }
    if (appearances !== false) {
        let appearanceOptionsToUse = [
            appearanceOptions.default,
            appearanceOptions.primary,
            appearanceOptions.secondary
        ];
        if (appearances) {
            appearanceOptionsToUse = appearances.map((appearance)=>appearanceOptions[appearance]);
        }
        linkResult.fields.push({
            name: 'appearance',
            type: 'select',
            defaultValue: 'default',
            options: appearanceOptionsToUse,
            admin: {
                description: 'Choose how the link should be rendered.'
            }
        });
    }
    return deepMerge(linkResult, overrides);
};
export default link;
