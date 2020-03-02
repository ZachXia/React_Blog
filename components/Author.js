import {Avatar, Divider} from 'antd'
import '../public/style/components/Author.css'

function Author(){
    return (
        <div className='author-div comm-box'>
            <div> <Avatar size={100} src='https://s2.ax1x.com/2020/03/02/3WpgKS.jpg' ></Avatar> </div>
            <div className='author-introduction'>
                fmt.Println("Hello、Happy World！")
                <Divider>社交帐号</Divider>
                <a href='https://weibo.com/zachxia'><Avatar size={28} icon='weibo' className='account' /></a>
                <a href='https://space.bilibili.com/7188253'><Avatar size={28} icon='play-circle' className='account' /></a>
            </div>

        </div>
    )
}

export default Author