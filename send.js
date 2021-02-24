

//sendNotification();

function sendNotification(){
	var key = 'AAAAFI4qAe0:APA91bG8coZbR1L6eSF2BL5u41eQRQZWwpMUZJg15I8lHKcpxYDkjFL-RIxE_wzXrCAN0RAwsphRrS1PwG7CyvyF0rCVEMOMH_qsP7z4JMij1Yhuzr8BIBiGQGUHuUzO3bTNpGbRKKg_';
	var to = 'd2JwRXVCDR4:APA91bFHnRPeJPmtZ5LFMrNTmPRXAKdE-d9myW_fl-ONbPcSlzlT7jOz-GO1w3YXT7l2aV4SiKuA4qIUwq3BTjyZsd10PuVj_QFefwv3isvRW9CQ1HSQoIKU3cqhJtEgR288jhcrD4dV';
	var notification = {
	  'title': 'Portugal vs. Denmark',
	  'body': '5 to 1',
	  'icon': 'firebase-logo.png',
	  'click_action': 'https://nyorofumi.github.io/'
	};
	
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
	}).then(function(response) {
	  console.log(response);
	}).catch(function(error) {
	  console.error(error);
	})
}

