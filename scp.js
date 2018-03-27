var scp = require('scp');



var opts = {
      file: 'C:\\Users\\py120\\Desktop\\Dev\\robotServer\\public\\uploadsdistances.txt',
      user: 'pi',
      host: '172.17.119.26',
      //host: '192.168.0.122',
      port:'22',
      path: '/home/pi/Desktop/uploads'
};

scp.send(opts, (err) => {
  if(err){
    console.log('Error intransfering file: ', err);
    return;
  }
  console.log('Transfered file');
});
