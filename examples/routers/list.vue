<template>
    <div>
        <h2>small size</h2>
        <List header="Header" footer="Footer" size="small" :split="false">
            <ListItem v-for="item in data1" :key="item">
                {{ item }}
            </ListItem>
        </List>
        <h2>default size</h2>
        <List header="Header" footer="Footer">
            <ListItem v-for="item in data1" :key="item">
                {{ item }}
            </ListItem>
        </List>
        <h2>large size</h2>
        <List header="Header" footer="Footer" border size="large">
            <ListItem v-for="item in data1" :key="item">
                {{ item }}
            </ListItem>
        </List>

        <Divider>没有 </Divider>

        <List>
            <ListItem v-for="item in data2" :key="item.title">
                <ListItemMeta :avatar="item.avatar" :title="item.title" :description="item.description">
                </ListItemMeta>
                一段内容
            </ListItem>
        </List>

        <Divider>带有 Action</Divider>

        <List>
            <ListItem v-for="item in data2" :key="item.title">
                <ListItemMeta :avatar="item.avatar" :title="item.title" :description="item.description">

                </ListItemMeta>
                一段内容
                <template slot="action">
                    <li>
                        <a href="">edit</a>
<!--                        <Button typr="primary">编辑</Button>-->
                    </li>
                    <li>
                        <a href="">more</a>
<!--                        <Button>删除</Button>-->
                    </li>
                </template>
            </ListItem>
        </List>

        <Divider>带图片</Divider>
        <List item-layout="vertical">
            <ListItem v-for="item in data2" :key="item.title">
                <ListItemMeta :avatar="item.avatar" :title="item.title" :description="item.description">

                </ListItemMeta>
                We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.
                <template slot="action">
                    <li>
                        <Icon type="ios-star-outline" /> 156
                    </li>
                    <li>
                        <Icon type="ios-thumbs-up-outline" /> 156
                    </li>
                    <li>
                        <Icon type="ios-chatbubbles-outline" /> 10
                    </li>
                </template>
                <template slot="extra">
                    <img src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large" style="width: 280px">
                </template>
            </ListItem>
        </List>

    </div>
</template>
<script>
    export default {
        data () {
            return {
                data1: [
                    'Racing car sprays burning fuel into crowd.',
                    'Japanese princess to wed commoner.',
                    'Australian walks 100km after outback crash.',
                    'Man charged over missing wedding girl.',
                    'Los Angeles battles huge wildfires.',
                ],
                data2: [
                    {
                        title: 'This is a title 1',
                        description: 'This is the description, This is the description, This is the description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar'
                    },
                    {
                        title: 'This is a title 2',
                        description: 'This is the description, This is the description, This is the description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar'
                    },
                    {
                        title: 'This is a title 3',
                        description: 'This is the description, This is the description, This is the description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar'
                    },
                    {
                        title: 'This is a title 4',
                        description: 'This is the description, This is the description, This is the description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar'
                    },
                    {
                        title: 'This is a title 5',
                        description: 'This is the description, This is the description, This is the description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar'
                    }
                ]
            };
        }
    };
</script>
