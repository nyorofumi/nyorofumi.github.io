

//sendNotification();

function sendNotification(){
	var key = 'AAAAFI4qAe0:APA91bG8coZbR1L6eSF2BL5u41eQRQZWwpMUZJg15I8lHKcpxYDkjFL-RIxE_wzXrCAN0RAwsphRrS1PwG7CyvyF0rCVEMOMH_qsP7z4JMij1Yhuzr8BIBiGQGUHuUzO3bTNpGbRKKg_';
	var to = document.getElementById("id_text").value;
	//var to = 'd2JwRXVCDR4:APA91bFHnRPeJPmtZ5LFMrNTmPRXAKdE-d9myW_fl-ONbPcSlzlT7jOz-GO1w3YXT7l2aV4SiKuA4qIUwq3BTjyZsd10PuVj_QFefwv3isvRW9CQ1HSQoIKU3cqhJtEgR288jhcrD4dV';
	//var to = 'cgs5xST2Gpo:APA91bGwaeVRPf1uFzG1qjqtCdS-f0OeufbIXilogvG7tdsorTjTWCn1rlucUkKJiW_TqE7OfWImRsJ7FLC-ZWn0lSvtACqleEI_iZoMt2BLpg1jHTLwecLX5IgJDX-fBnbORoqzLmrK';

	var notification = {
	  'title': 'Portugal vs. Denmark',
	  'body': '5 to 1',
	  'icon': 'firebase-logo.png',
	  'click_action': 'https://nyorofumi.github.io/'
	};
	
	var target = document.getElementById("nyoro"); 
	target.innerHTML = to;
	
	fetch('https://fcm.googleapis.com/fcm/send', {
	  'method': 'POST',
	  'headers': {
		'Authorization': 'key=' + key,
		'Content-Type': 'application/json'
	  },
	  'body': JSON.stringify({
		'notification': notification,
		'to': to
	  })
	}).then(function(response) 
	  console.log(response);
	}).catch(function(error) {
	  console.error(error);
	})
	
}

