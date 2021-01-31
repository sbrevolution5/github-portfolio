import React, { Component } from 'react';
import styled from 'styled-components';
import Link from '../components/Link/Link';
import List from '../components/List/List';


const ProfileWrapper = styled.div`
    width: 50%;
    margin:10px auto;
`;
const Avatar= styled.img`
    width: 150px;
`;
class Profile extends Component {
    constructor() {
        super();
        this.state = {
            data: {},
            loading: true,
        }
    }
    async componentDidMount(){
        const profile = await fetch('https://api.github.com/users/sbrevolution5');
        const profileJSON = await profile.json()
        console.log(profileJSON)

        if(profileJSON) {
            this.setState({
                data:profileJSON,
                loading: false,
            })
        }
    }
    render() {
        const {data, loading} = this.state
        if (loading){
            return <div>Loading...</div>
        }
        const items = [
            { label: 'html_url', value: <Link url={data.html_url} title='Github URL' />},
            { label: 'repos_url', value: <Link url={data.repos_url} />},
            { label: 'name', value: <Link url={data.name} />},
            { label: 'company', value: <Link url={data.company} />},       
            { label: 'location', value: <Link url={data.location} />},
            { label: 'email', value: <Link url={data.email} />},
            { label: 'bio', value: <Link url={data.bio} />},
        ]
        return (
            <ProfileWrapper>
                <Avatar className='Profile-avatar' src={data.avatar_url} alt='avatar' />
                <List items ={items}/>
            </ProfileWrapper>
        )
    }
}
export default Profile;