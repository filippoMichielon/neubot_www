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

/*function index_init() {
    utils.setActiveTab("index");

    jQuery.jqplot.config.enablePlugins = true;				//da mettere nel document ready

    tracker = state.tracker(process_state);
    tracker.start();
};
*/
jQuery(document).ready(function() {
        
/*        jQuery.jqplot.config.enablePlugins = true;
        tracker = state.tracker(function(){});
        tracker.start();
*/                


        $('#content').load('status.html', function(){
            utils.setActiveTab("index");
            i18n.translate();
        });

        $('#resultsbutton').click(function(){
            $('#content').load('results.html', function(){
                utils.setActiveTab("results");
                i18n.translate();            
            });
        });
 
        $('#logbutton').click(function(){
            $('#content').load('log.html', function(){
                utils.setActiveTab("log");
                i18n.translate();            
            });
        });
                    
        $('#privacybutton').click(function(){
            $('#content').load('privacy.html', function(){
                utils.setActiveTab("privacy");
                i18n.translate();            
            });
        });

        $('#resultsbutton').click(function(){
            $('#settings').load('settings.html', function(){          //è influente l'ordine in cui si caricano i javascript nell'html?
                utils.setActiveTab("settings");
                i18n.translate();
            });
        });

        $('#settingsbutton').click(function(){
            $('#content').load('settings.html', function(){
                utils.setActiveTab("settings");
                i18n.translate();            
            });
        });

        $('#statusbutton').click(function(){
            $('#content').load('status.html', function(){
                utils.setActiveTab("index");
                i18n.translate();
            });
        });

});        
