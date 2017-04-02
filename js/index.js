function dropDown(){
	mui('header').on('tap','.xialaImg',function(){
		var screenWidth = $(window).width();
		if(screenWidth<=768){
			$('.dropdownTop').toggleClass('active');
		}
		else{
			$('.dropdownLeft').toggleClass('active');
			
			/*  header侧拉框高度 */
			var height = $(window).height();
			var dropdownLeft = height - 106;
			$('.dropdownLeft').css('height',dropdownLeft+'px');
		}
	});
}
function dropDownSure(){
	mui('header').on('tap','.okImg',function(){
		$('.dropdownRight1').toggleClass('active');
	});
}
function dropDownSelect(){
	mui('header').on('tap','.selectImg',function(){
		$('.dropdownRight').toggleClass('active');
	});
}
function methodMove(){
	function fetch_rowdata(row) { // 获取一行的数据
		var retobj = {};
		retobj['trainnumber'] = row.find('.trainnumber').val();
		retobj['gameversion'] = row.find('.gameversion').text();
		retobj['gamesetting'] = row.find('.gamesetting').text();
		retobj['gametype'] = row.find('.gametype').text();
		return retobj;
	};

	function fill_rowdata(row, newdata) { // 将数据填充到行DOM节点中
		row.find('.trainnumber').val(newdata['trainnumber']);
		row.find('.gameversion').text(newdata['gameversion']);
		row.find('.gamesetting').text(newdata['gamesetting']);
		row.find('.gametype').text(newdata['gametype']);
	}

	$('.zhiliaoMethod .methodUp').each(function(index) {
		if(index) { //第一行不触发动作
			$(this).on('click', function() {
				// 行DOM节点						
				var currow = $(this).parent().parent();
				var prevrow = currow.prev();
	
				// 行数据
				var currow_data = fetch_rowdata(currow);
				var prevrow_data = fetch_rowdata(prevrow);
	
				// 重新将数据填入行DOM节点中
				fill_rowdata(currow, prevrow_data);
				fill_rowdata(prevrow, currow_data);
			});
		}
	});
	$('.zhiliaoMethod .methodDown').each(function(index) {
		if(index != 7) { //最后一行不触发动作
			$(this).on('click', function() {
				// 行DOM节点						
				var currow = $(this).parent().parent();
				var nextrow = currow.next();
	
				// 行数据
				var currow_data = fetch_rowdata(currow);
				var nextrow_data = fetch_rowdata(nextrow);
	
				// 重新将数据填入行DOM节点中
				fill_rowdata(currow, nextrow_data);
				fill_rowdata(nextrow, currow_data);
			});
		}
	});
	$('.zhiliaoMethod .methodCopy').each(function(index) {
		if(index != 7) {
			$(this).on('click', function() {
				$('.zhiliaoMethod').removeClass('active');
				$(this).parent().parent().addClass('active');
				var btnArray = ['取消', '确认'];
				mui.confirm('将复制当前内容到下一行，并替换原有内容', '医生提示', btnArray, function(e) {
					if(e.index == 1) {
						// 行DOM节点						
						var currow = $('.active');
						var nextrow = currow.next();
	
						// 行数据
						var currow_data = fetch_rowdata(currow);
						var nextrow_data = fetch_rowdata(nextrow);
	
						// 重新将数据填入行DOM节点中
						fill_rowdata(currow, currow_data);
						fill_rowdata(nextrow, currow_data);
					} else {}
				})
			})
		}
	})
}

var mydate = new Date();
var year = mydate.getFullYear();
var month = mydate.getMonth();
var day = mydate.getDate();
var week = mydate.getDay();
function getDate(){
	for(var i = year; i < year + 100; i++) {
		var yearHtml = '<option value=' + i + '>' + i + '年</option>'
		$('.years select').append(yearHtml)
	}
	for(var i = month; i < 12; i++) {
		month++;
		var monthHtml = '<option value=' + month + '>' + month + '月</option>'
		$('.months select').append(monthHtml)
	}
	$('.now span').html($('.years select').val());
	$('.now i').html($('.months select').val());
	
	if($('.months select').val() == 1 || $('.months select').val() == 3 || $('.months select').val() == 5 || $('.months select').val() == 7 || $('.months select').val() == 8 || $('.months select').val() == 10 || $('.months select').val() == 12) {
		var dayHtml = '<div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">1</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">2</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">3</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3"><a href="" class="data">4</a></div></div><div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">5</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">6</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">7</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3"><a href="" class="data">8</a></div></div><div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">9</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">10</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">11</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3"><a href="" class="data">12</a></div></div><div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">13</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">14</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">15</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3"><a href="" class="data">16</a></div></div><div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">17</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">18</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">19</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3"><a href="" class="data">20</a></div></div><div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">21</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">22</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">23</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3"><a href="" class="data">24</a></div></div><div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">25</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">26</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">27</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3"><a href="" class="data">28</a></div></div><div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">29</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">30</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">31</a></div></div>';
		$('.days').append(dayHtml);
		for(var i = 1; i < 31; i++) {
			if($('.days .data').eq(i).html() == day) {
				$('.days .data').eq(i).addClass('checked')
			}
		}
		for(var i=0;i<7;i++){
			if(i<=week){
				$('.dayplus').eq(week-i).html(day-i);
			}else{
				var a = day+(i-week);
				if(a>31){
					a = day+(i-week) -31;
					$('.dayplus').eq(i).html(a);
				}else{
					$('.dayplus').eq(i).html(day+(i-week));
				}	
			}
		}
	} else if($('.months select').val() == 2) {
		if($('.years select').val() % 400 == 0 || $('.years select').val() % 4 == 0) {
			var dayHtml = '<div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">1</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">2</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">3</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3"><a href="" class="data">4</a></div></div><div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">5</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">6</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">7</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3"><a href="" class="data">8</a></div></div><div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">9</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">10</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">11</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3"><a href="" class="data">12</a></div></div><div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">13</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">14</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">15</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3"><a href="" class="data">16</a></div></div><div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">17</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">18</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">19</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3"><a href="" class="data">20</a></div></div><div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">21</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">22</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">23</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3"><a href="" class="data">24</a></div></div><div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">25</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">26</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">27</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3"><a href="" class="data">28</a></div></div><div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">29</a></div></div>';
			$('.days').append(dayHtml);
			for(var i = 1; i < 29; i++) {
				if($('.days .data').eq(i).html() == day) {
					$('.days .data').eq(i).addClass('checked')
				}
			}
			for(var i=0;i<7;i++){
				if(i<=week){
					$('.dayplus').eq(week-i).html(day-i);
				}else{
					var a = day+(i-week);
					if(a>29){
						a = day+(i-week) -29;
						$('.dayplus').eq(i).html(a);
					}else{
						$('.dayplus').eq(i).html(day+(i-week));
					}
				}
			}
		} else {
			var dayHtml = '<div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">1</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">2</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">3</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3"><a href="" class="data">4</a></div></div><div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">5</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">6</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">7</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3"><a href="" class="data">8</a></div></div><div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">9</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">10</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">11</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3"><a href="" class="data">12</a></div></div><div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">13</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">14</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">15</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3"><a href="" class="data">16</a></div></div><div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">17</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">18</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">19</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3"><a href="" class="data">20</a></div></div><div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">21</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">22</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">23</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3"><a href="" class="data">24</a></div></div><div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">25</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">26</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">27</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3"><a href="" class="data">28</a></div></div></div>';
			$('.days').append(dayHtml);
			for(var i = 0; i < 28; i++) {
				if($('.days .data').eq(i).html() == day) {
					$('.days .data').eq(i).addClass('checked')
				}
			}
			for(var i=0;i<7;i++){
				if(i<=week){
					$('.dayplus').eq(week-i).html(day-i);
				}else{
					var a = day+(i-week);
					if(a>28){
						a = day+(i-week) -28;
						$('.dayplus').eq(i).html(a);
					}else{
						$('.dayplus').eq(i).html(day+(i-week));
					}
				}
			}
		}
	} else {
		var dayHtml = '<div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">1</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">2</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">3</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3"><a href="" class="data">4</a></div></div><div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">5</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">6</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">7</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3"><a href="" class="data">8</a></div></div><div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">9</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">10</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">11</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3"><a href="" class="data">12</a></div></div><div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">13</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">14</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">15</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3"><a href="" class="data">16</a></div></div><div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">17</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">18</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">19</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3"><a href="" class="data">20</a></div></div><div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">21</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">22</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">23</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3"><a href="" class="data">24</a></div></div><div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">25</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">26</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">27</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3"><a href="" class="data">28</a></div></div><div class="mui-row bB_c"><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">29</a></div><div class="mui-col-xs-3 mui-col-sm-3 mui-col-md-3 mui-col-lg-3 bR_c"><a href="" class="data">30</a></div></div>';
		$('.days').append(dayHtml);
		var tD = mydate;	
		var sun = getSun(tD).toLocaleString();
		var mon = getMon(tD).toLocaleString();
		var tue = getTue(tD).toLocaleString();
		var wed = getWed(tD).toLocaleString();
		var thu = getThu(tD).toLocaleString();
		var fri = getFri(tD).toLocaleString();
		var sat = getSat(tD).toLocaleString();
		sun = sun.substr(0, sun.indexOf(' ') + 1)
		mon = mon.substr(0, sun.indexOf(' ') + 1)
		tue = tue.substr(0, sun.indexOf(' ') + 1)
		wed = wed.substr(0, sun.indexOf(' ') + 1)
		thu = thu.substr(0, sun.indexOf(' ') + 1)
		fri = fri.substr(0, sun.indexOf(' ') + 1)
		sat = sat.substr(0, sun.indexOf(' ') + 1)
		for(var i = 0; i < 29; i++) {
			if($('.days .data').eq(i).html() == day) {
				$('.days .data').eq(0).addClass('checked')
			}
			$('.weeks .dayplus').eq(0).html(sun);
			$('.weeks .dayplus').eq(1).html(mon);
			$('.weeks .dayplus').eq(2).html(tue);
			$('.weeks .dayplus').eq(3).html(wed);
			$('.weeks .dayplus').eq(4).html(thu);
			$('.weeks .dayplus').eq(5).html(fri);
			$('.weeks .dayplus').eq(6).html(sat);
		}
	}
}
function getSun(theDate){
	var firstDateOfWeek;
	theDate.setDate(theDate.getDate() - theDate.getDay()); //	 
	firstDateOfWeek = theDate;
	return firstDateOfWeek;	
}
function getMon(theDate){
	var lastDateOfWeek;
	theDate.setDate(theDate.getDate() + 1 - theDate.getDay()); //	 
	lastDateOfWeek = theDate;
	return lastDateOfWeek;	
}
function getTue(theDate){
	var lastDateOfWeek;
	theDate.setDate(theDate.getDate() + 2 - theDate.getDay()); //	 
	lastDateOfWeek = theDate;
	return lastDateOfWeek;	
}
function getWed(theDate){
	var lastDateOfWeek;
	theDate.setDate(theDate.getDate() + 3 - theDate.getDay()); //	 
	lastDateOfWeek = theDate;
	return lastDateOfWeek;	
}
function getThu(theDate){
	var lastDateOfWeek;
	theDate.setDate(theDate.getDate() + 4 - theDate.getDay()); //	 
	lastDateOfWeek = theDate;
	return lastDateOfWeek;	
}
function getFri(theDate){
	var lastDateOfWeek;
	theDate.setDate(theDate.getDate() + 5 - theDate.getDay()); //	 
	lastDateOfWeek = theDate;
	return lastDateOfWeek;	
}
//得到每周的最后一天(周六)
function getSat(theDate){
	var lastDateOfWeek;
	theDate.setDate(theDate.getDate() + 6 - theDate.getDay()); //	 
	lastDateOfWeek = theDate;
	return lastDateOfWeek;	
}
function clickDay(){
	mui('.mui-row').on('tap','.data',function(){
		for(var i = 0;i<$('.days .data').length +1;i++){
			$('.days .data').eq(i).removeClass('checked');
		}
		$(this).addClass('checked');
		$('.now span').html($('.years select').val());
		$('.now i').html($('.months select').val());
		var day = parseInt($(this).html());
		var year = $('.years select').val();
		var month = $('.months select').val();
		var date = year+'/'+month+'/'+day;
		var week = new Date(date).getDay()
		
		var tD = new Date(date);
		var sun = getSun(tD).toLocaleString();
		var mon = getMon(tD).toLocaleString();
		var tue = getTue(tD).toLocaleString();
		var wed = getWed(tD).toLocaleString();
		var thu = getThu(tD).toLocaleString();
		var fri = getFri(tD).toLocaleString();
		var sat = getSat(tD).toLocaleString();
		sun = sun.substr(0, sun.indexOf(' ') + 1)
		mon = mon.substr(0, sun.indexOf(' ') + 1)
		tue = tue.substr(0, sun.indexOf(' ') + 1)
		wed = wed.substr(0, sun.indexOf(' ') + 1)
		thu = thu.substr(0, sun.indexOf(' ') + 1)
		fri = fri.substr(0, sun.indexOf(' ') + 1)
		sat = sat.substr(0, sun.indexOf(' ') + 1)
		for(var i = 0; i < 29; i++) {
			if($('.days .data').eq(i).html() == day) {
				$('.days .data').eq(0).addClass('checked')
			}
			$('.weeks .dayplus').eq(0).html(sun);
			$('.weeks .dayplus').eq(1).html(mon);
			$('.weeks .dayplus').eq(2).html(tue);
			$('.weeks .dayplus').eq(3).html(wed);
			$('.weeks .dayplus').eq(4).html(thu);
			$('.weeks .dayplus').eq(5).html(fri);
			$('.weeks .dayplus').eq(6).html(sat);
		}
		
	})
}
