import VisualGuideItem from '../models/VisualGuideItemModel';
import DiscoverItem from '../models/DiscoverItemModel';

export const visualGuides: VisualGuideItem[] = [
    new VisualGuideItem(
        'Meat, seafood & eggs',
        'https://www.meat2000.de/wp-content/uploads/2019/04/Meat2000-Facebook-1200x630px.jpg',
        'peachpuff'
    ),
    new VisualGuideItem(
        'Vegetables',
        'https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38007.jpg',
        'aliceblue'
    ),
    new VisualGuideItem(
        'Nuts',
        'https://www.jessicagavin.com/wp-content/uploads/2020/09/types-of-nuts-2.jpg',
        'mistyrose'
    ),
];

export const discoverAndLearn: DiscoverItem[] = [
    new DiscoverItem(
        'Keto guide',
        'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6IjU4OTJjYTkyZGMwNTVjOWZkMTY4ZWY2MTIzMmI2ZWMzIiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=f9f75985ff0e711026bba4ad596c796acbf7551452590aaf73eaba90c1087ba9'
    ),
    new DiscoverItem(
        'Lose weight',
        'https://www.efdgroup.eu/wp-content/uploads/2021/04/Scale.png'
    ),
    new DiscoverItem(
        'All guides',
        'https://cdn.donmai.us/original/ee/07/ee078a4019f7488c46c67fc701612808.png'
    ),
];
