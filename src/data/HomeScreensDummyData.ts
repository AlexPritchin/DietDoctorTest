import VisualGuideItem from '../models/VisualGuideItemModel';
import DiscoverItem from '../models/DiscoverItemModel';
import Recipe from '../models/RecipeModel';

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

export const recipes: Recipe[] = [
    new Recipe(
        'Sample egg recipe',
        'https://dmrqkbkq8el9i.cloudfront.net/Pictures/1024x536/1/2/0/253120_eggs.jpg',
        0,
        0,
        0
    ),
    new Recipe(
        'Sample egg recipe',
        'https://dmrqkbkq8el9i.cloudfront.net/Pictures/1024x536/1/2/0/253120_eggs.jpg',
        0,
        1,
        0
    ),
    new Recipe(
        'Sample egg recipe',
        'https://dmrqkbkq8el9i.cloudfront.net/Pictures/1024x536/1/2/0/253120_eggs.jpg',
        1,
        1,
        0
    ),
    new Recipe(
        'Sample fish recipe',
        'https://www.saif-global.co.uk/wp-content/uploads/2021/08/Gilt-Head-Bream-4600g-2-Per-Pack-Custom-256x256.jpg',
        1,
        1,
        1
    ),
    new Recipe(
        'Sample fish recipe',
        'https://www.saif-global.co.uk/wp-content/uploads/2021/08/Gilt-Head-Bream-4600g-2-Per-Pack-Custom-256x256.jpg',
        1,
        2,
        1
    ),
    new Recipe(
        'Sample fish recipe',
        'https://www.saif-global.co.uk/wp-content/uploads/2021/08/Gilt-Head-Bream-4600g-2-Per-Pack-Custom-256x256.jpg',
        2,
        3,
        1
    ),
    new Recipe(
        'Sample pork recipe',
        'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00203316000003/1d1ea036946140bf213e3bbf7c4351e1_large.png&width=256&type=webp&quality=80',
        1,
        2,
        2
    ),
    new Recipe(
        'Sample pork recipe',
        'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00203316000003/1d1ea036946140bf213e3bbf7c4351e1_large.png&width=256&type=webp&quality=80',
        2,
        1,
        2
    ),
    new Recipe(
        'Sample pork recipe',
        'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00203316000003/1d1ea036946140bf213e3bbf7c4351e1_large.png&width=256&type=webp&quality=80',
        2,
        3,
        2
    ),
];
