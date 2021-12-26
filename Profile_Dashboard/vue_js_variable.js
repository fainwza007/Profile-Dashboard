
var myname = new Vue({
   el: '#myname',
   data: {
      name: 'Akarin Sangyor'
   }
})

var myname2 = new Vue({
   el: '#myname2',
   data: {
      name: 'Akarin Sangyor'
   }
})

var titleuser = new Vue({
   el: '#title_userpro',
   data: {
      title: 'User Profile'
   }
})

var about = new Vue({
   el: '#aboutme',
   data: {
      name: 'Akarin Sangyor',
      title: 'About: ',
      pos: 'Student and Apprentice programmer',
      mail: ': specialday191@gmail.com',
      phone: ': 095-5492016'
   }
})


var skill = new Vue({
   el: '#skill',
   data: {
      html: 'HTML',
      html_skill: '85%',
      css: 'CSS',
      css_skill: '65%',
      bootstrap: 'Bootstrap',
      bootstrap_skill: '90%',
      vue_js: 'Vue.js',
      vue_js_skill: '60%'
   }
})

var user_pro_content = new Vue({
   el: '#user_pro_content',
   data: {
      profile: {
         title: 'ประวัติส่วนตัว',
         name: 'ชื่อจริง-นามสกุล : นายเอกรินทร์ แสงยอ',
         ethnicity: 'เชื้อชาติ : ไทย',
         nationality: 'สัญชาติ : ไทย',
         age: 'อายุ : 20 ปี',
         address: 'ภูมิลำเนา : 113/9 ม.1 ต.เขาพระ อ.รัตภูมิ จ.สงขลา 90180',

         study_title: 'ประวัติการศึกษา',
         study1: 'โรงเรียนบ้านกำแพงเพชร (ประถม)',
         study2: 'โรงเรียนหาดใหญ่วิทยาลัยสมบูรณ์กุลกันยา (มัธยมต้น)',
         study3: 'วิทยาลัยเกษตรและเทคโนโลยีสงขลา (ปวช.)',
         study4: ' มหาวิทยาลัยแม่โจ้ (ป.ตรี) >>กำลังศึกษาอยู่',

         hobby_title: 'งานอดิเรก',
         hobby1: 'เล่นเกมส์',
         hobby2: 'ดูฟุตบอล',
         hobby3: 'เล่น/ดูบาสเก็ตบอล',
         hobby4: 'ติดตามข่าวสารวงการรถมอเตอร์ไซค์',
         hobby5: 'ขับมอเตอร์ไซต์ท่องเที่ยว'
      }
  
   }
})

var title_dash = new Vue({
   el: '#headtitle',
   data: {
      title_dash: 'Profile Dashboard'
   }
})

var height = new Vue({
   el: '#height_me',
   data: {
      height: '171',
      unit: 'CM.'
   }
})

var weight = new Vue({
   el: '#weight_me',
   data: {
      weight: '63',
      unit: 'KG.'
   }
})

var birthday = new Vue({
   el: '#birth',
   data: {
      year: '2001',
      date: '30 AUG'
   }
})

var sleep = new Vue({
   el: '#sleep',
   data: {
      time: '8',
      unit: 'Hours'
   }
})

var face = new Vue({
   el: '#facebook_friend',
   data: {
      number: '1.2k',
      member: 'Friends'
   }
})

var face2 = new Vue({
   el: '#facebook_posts',
   data: {
      number: '6-9',
      member: 'Post/Day'
   }
})

var youtube = new Vue({
   el: '#youtube',
   data: {
      number: '10.2k',
      followers: 'Followers',
      number_video: '299',
      video: 'Videos'
   }
})

var twitter = new Vue({
   el: '#twitter',
   data: {
      number_followers: '107',
      followers: 'Followers',
      number_following: '83',
      following: 'Following'
   }
})

var github = new Vue({
   el: '#github',
   data: {
      git_follower: '0',
      followers: 'Followers',
      num_pro: '3',
      git_project: 'Projects'
   }
})

var testinomial = new Vue({
   el: '#testinomial',
   data: {
      tn: {
         title: 'My favorite programming language',

         python_title: 'Python',
         python_author: 'Python Software Foundation',
         python_detail: 'Python เป็นภาษาโปรแกรมที่ใช้งานได้ง่ายมากที่สุดสำหรับผม ด้วยความที่เป็นภาษาที่ใหม่และรองรับการทำงานที่หลากหลาย จึงเป็นหนึ่งภาษาที่ผมชอบมากที่สุด',

         java_title: 'Java',
         java_author: 'Oracle Corporation',
         java_detail: 'Java เป็นหนึ่งในภาษาที่ผมชอบมากในการประยุกต์ใช้กับการทำงานเชิงวัตถุเนื่องจากเป็นโปรแกรม OOP โปรแกรมแรกที่ผมได้เริ่มเขียน จึงใช้ภาษา Java มาโดยตลอดและเป็นตัวที่ผมชอบเขียนมากที่สุดในกลุ่มของ OOP',

         html_title: 'HTML',
         html_author: 'Tim Berners Lee',
         html_detail: 'HTML เป็นภาษาโปรแกรมตัวแรกที่ผมได้เริ่มเขียนและได้รู้จักเป็นครั่้งแรกตั้งแต่ตอน ป.6 และมาในวันนี้ผมได้เรียนในมหาวิทยาลัยก็ได้กลับมาเขียน HTML อีกครั้ง และเมื่่อเขียนไปเรื่อยๆ ก็เริ่มชอบการเขียน HTML มากขึ้น',

        socialtitle: 'Social media I play in a day.',

        fb_title: 'Facebook',
        fb_play: '25%',

        yt_title: 'Youtube',
        yt_play: '35%',

        ig_title: 'IG',
        ig_play: '10%',

        line_title: 'Line',
        line_play: '15%',

        other_title: 'Other',
        other_play: '15%'
      }
  
   }
})

var daily = new Vue({
   el: '#dailyroutine',
   data: {
      dr: {
         title: 'My daily routine',
         detail: 'กิจวัตรประจำวันที่ผมทำเป็นประจำ',

         act1: 'ตื่นนอน (Wake Up)',
         act1_time: '06:00 AM',

         act2: 'เรียน/ทำการบ้าน (Study/Do homework)',
         act2_time: '08:00 AM - 06:00 PM',

         act3: 'เล่นบาสเก็ตบอล/ออกกำลังกาย (Play Basketball/Exercise)',
         act3_time: '06:30 PM - 08:00 PM',

         act4: 'เล่นเกมส์/พักผ่อน (Play Video Game/Relaxing)',
         act4_time: '08:30 PM - 10:00 PM',

         act5: 'นอนหลับ (Sleeping)',
         act5_time: '10:00 PM - 06:00 AM',

      }
  
   }
})

var friend = new Vue({
   el: '#friend',
   data: {
      fr: {

         title: 'My Friends',
         detail: 'เพื่อนสนิทของผม',

         friend1: 'Pattanpong Sampantano',
         friend1_nickname: 'Nickname : Ton',
         friend1_stuid: 'StudentID : 349',

         friend2: 'Suppachai Rodrit',
         friend2_nickname: 'Nickname : Dew',
         friend2_stuid: 'StudentID : 368',

         friend3: 'Anupat Phoothong',
         friend3_nickname: 'Nickname : Elf',
         friend3_stuid: 'StudentID : 376',

         friend4: 'Akkarawut Parisutsunthorn',
         friend4_nickname: 'Nickname : Kirk',
         friend4_stuid: 'StudentID : 379'
      }
  
   }
})

var footer = new Vue({
   el: '#footer',
   data: {
      foot: {

         end: 'Copyright © 2021 Designed by Akarin Sangyor. design. All rights reserved.',
         distribute: 'Distributed By : ',
         themewagon: 'ThemeWagon'
   
      }
  
   }
})








