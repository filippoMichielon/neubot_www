/* neubot/www/js/index.js */
/*-
 * Copyright (c) 2010 Antonio Servetti <antonio.servetti@polito.it>,
 *  Politecnico di Torino
 *
 * Copyright (c) 2010 Simone Basso <bassosimone@gmail.com>,
 *  NEXA Center for Internet & Society at Politecnico di Torino
 *
 * This file is part of Neubot <http://www.neubot.org/>.
 *
 * Neubot is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Neubot is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Neubot.  If not, see <http://www.gnu.org/licenses/>.
 */

function process_state(data) {

    var now = utils.getNow();
    var value = '';

    if (data.events.pid) {
        jQuery("#pid").text(data.events.pid);
    }

    if (data.events.next_rendezvous) {
        value = utils.getTimeFromSeconds(data.events.next_rendezvous);
        // The sysadmin might have adjusted the clock
        if (value && value > now) {
            jQuery("#next_rendezvous").text(utils.formatMinutes(value - now));
        }
    }

    if (data.events.since) {
        value = utils.getTimeFromSeconds(data.events.since, true);
        if (value) {
            jQuery("#since").text(value);
        }
    }

    if (data.events.negotiate) {
        if (data.events.negotiate.queue_pos) {
            jQuery("#queuePos").text(data.events.negotiate.queue_pos);
        }
        else {
            jQuery("#queuePos").text(0);
        }
    }

    if (data.events.test_name) {
        jQuery("#testName").text(data.events.test_name);
    }

}

jQuery(document).ready(function() {


    var prev, curr, next;

    var sez, link;

        
    jQuery.jqplot.config.enablePlugins = true;
    tracker = state.tracker(function(){});
    tracker.start();

    $('#content').load('status.html', function(){
        utils.setActiveTab("status");
        i18n.translate();

		curr = "status.html";

    });


    $('.sect').click(function () {
 
        sez = $(this).attr('id');
        sez = sez.substring(0, sez.indexOf("link"));
        link = sez + ".html";

        $('#content').load(link, function () {

            utils.setActiveTab(sez);
            i18n.translate();

        });

    });


/*    $('#resultslink').click(function(){

        sez = $(this).attr('id');

sez = sez.substring( 0, sez.indexOf( "link" ) );

var sez = sez + ".html";

        $('#content').load(sez, function(){
            utils.setActiveTab("results");
            i18n.translate();  
   
/*            try {  

                prev = curr;

                curr = sez;

alert("prev: " + prev + " curr: " + curr);

                window.history.pushState({state: "results"}, '', "results.html");
                evt.preventDefault();


            }catch(e){
                return;
            }    

        });
    });

   window.addEventListener("popstate", function (e) {


alert(prev);



		$('#content').load(prev, function(){
            utils.setActiveTab("index");
            i18n.translate();
        });        

//manca cambio storia

	history.back();
    });

window.addEventListener('popstate', function(event) {
  console.log('popstate fired!');

  updateContent(event.state);
});
*/
});        
