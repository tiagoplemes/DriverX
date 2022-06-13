import OAuthManager from 'react-native-social-login';

const social = new OAuthManager('driverx');

social.configure({
    facebook: {
        client_id: '1440230156398317',
        client_secret: 'c74e28c1a537a030b393ecb78377aed3'
    },
});

export default social;