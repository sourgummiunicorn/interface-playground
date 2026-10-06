// Shared demo behaviors, presented through four different learning environments.
const collections = [
 {id:'navigation', title:'Navigation & Page Structure', description:'Help people find their way and understand where things belong.', terms:[
 ['header','Header','The top area of a page, with branding and key controls.','Helps users recognize the site and reach common tools. Keep the layout consistent across pages.','Try the search or account button. Clear the field or close the account panel to return.',`<header class="mini-header"><div class="mini-brand"><span>s</span> studio</div><input aria-label="Search the header demo" placeholder="Search…"><button data-action="account" aria-expanded="false">Account</button></header><div class="mini-panel account-panel" hidden>Alex · Student account<br><button data-action="account-close">Close account</button></div><p class="small-note header-result">Branding, search, and account. One familiar place.</p>`],
 ['navigation-bar','Navigation bar','A set of links to the main pages or sections of a site.','Helps users move around. Use clear labels and show which page is current.','Choose a link to change the demo page. Choose Home to return.',`<nav class="demo-nav" aria-label="Example site"><a href="#nav-home" data-page="Home" aria-current="page">Home</a><a href="#nav-events" data-page="Events">Events</a><a href="#nav-about" data-page="About">About</a></nav><div class="mini-panel nav-page" id="nav-home"><h4>Welcome home.</h4><p class="small-note">A place for curious minds.</p></div>`],
 ['hamburger','Hamburger menu','A three-line button that reveals a navigation menu.','Saves space on smaller screens. Give the button a name and show whether the menu is open.','Click Menu to reveal the links. Click Close menu or press Escape to close it.',`<button class="menu-button" data-action="hamburger" aria-expanded="false" aria-controls="mobile-menu"><span class="hamburger" aria-hidden="true">☰</span><span class="menu-label">Menu</span></button><nav class="local-menu" id="mobile-menu" aria-label="Mobile demo" hidden><a href="#navigation">Navigation examples</a><a href="#content">Content examples</a><a href="#input">Input examples</a></nav><p class="small-note">Small button. More room for the page.</p>`],
 ['drawer','Sidebar / Drawer','A sidebar stays beside content. A drawer slides into view when needed.','Both give users nearby tools or navigation. A drawer needs a clear close control.','Open the drawer to see temporary navigation. Close it or press Escape; the sidebar stays.',`<div class="drawer-stage"><aside class="fixed-sidebar" aria-label="Example sidebar"><strong>Sidebar</strong><p>Always<br>here</p></aside><div class="drawer-content"><p>Your workspace</p><button data-action="drawer" aria-expanded="false" aria-controls="example-drawer">Open drawer</button></div><div class="drawer" id="example-drawer" hidden><button data-action="drawer-close" aria-label="Close drawer">×</button><strong>Drawer</strong><nav aria-label="Drawer demo"><a href="#content">Browse content</a><a href="#input">Try input controls</a></nav></div></div>`],
 ['breadcrumbs','Breadcrumbs','Links that show a page’s place in a larger hierarchy.','Help users go back to a parent page. Order links from broad to specific; the current page is plain text.','Choose Home or Furniture to move up. Reset restores the Desks page.',`<nav class="breadcrumbs" aria-label="Example breadcrumbs"></nav><div class="mini-panel crumb-page">Desks · Find your next workspace.</div>`],
 ['hero','Hero section','A prominent introduction near the top of a page.','Helps users understand the page and its main goal. Pair a clear headline with one main call to action.','Click Start learning to change the demo to a welcome message. Reset brings the introduction back.',`<section class="mini-hero"><div><h4>Make room for ideas.</h4><p>Learn something new, one small step at a time.</p><button class="primary" data-action="hero">Start learning</button></div><div class="visual-placeholder" role="img" aria-label="Example hero visual placeholder">Your big idea<br>goes here</div></section>`],
 ['footer','Footer','The bottom area of a page with supporting information and links.','Helps users find practical details. Keep links descriptive and easy to reach.','Choose a footer link to view its sample information. Close the information or reset to return.',`<p class="small-note">You’ve reached the end of this little page.</p><footer class="mini-footer"><a href="#footer-contact" data-footer="Contact">Contact</a><a href="#footer-privacy" data-footer="Privacy">Privacy</a><a href="#footer-accessibility" data-footer="Accessibility">Accessibility</a></footer><div class="footer-panel mini-panel" hidden><p></p><button data-action="footer-close">Close information</button></div>`]
 ]}
];

// The teaching format changes with the concept; controls keep their existing IDs.
const experiments = {
 header: 'Open the account panel. What stays in place?',
 'navigation-bar': 'Visit Events. Notice which link looks different.',
 hamburger: 'Open the menu. Then close it with Escape.',
 drawer: 'Open the drawer. Which part stays put?',
 breadcrumbs: 'Follow Furniture to move one level up.',
 hero: 'Try the big action in this miniature introduction.',
 footer: 'Find the privacy information at the bottom.',
 card: 'Open this event for the details behind its preview.',
 accordion: 'Reveal an answer. Collapse it again.',
 tabs: 'Switch to Reviews. What disappears?',
 carousel: 'Move through three ideas, one panel at a time.',
 modal: 'Try Delete item. You can still change your mind.',
 popover: 'Open the extra options. Click outside to close them.',
 tooltip: 'Hover over the i, or reach it with Tab.',
 icon: 'One heart is a symbol. The other saves something.',
 'button-link': 'Try both. One changes this view; one takes you elsewhere.',
 cta: 'Which action catches your eye first? Try it.',
 text: 'A name needs one line. An idea might need a few.',
 dropdown: 'Run a command, then change a setting.',
 choices: 'Pick two interests. Now try picking two delivery methods.',
 toggle: 'Flip the switch. Slide the volume. Watch the values.',
 search: 'Type “Lon”, then choose a matching destination.',
 filter: 'Find the cheapest event under $150.',
 pagination: 'Jump to page 3. Can you still go Next?',
 badge: 'Read a message. Watch the little number change.',
 toast: 'Save, then wait. Which message stays?',
 loading: 'Start the upload. Watch waiting turn into progress.',
 states: 'Try the next step in each state. Notice what becomes possible.'
};

function termMarkup(id, variant = '') {
 const group = collections.find(group => group.terms.some(term => term[0] === id));
 const term = group.terms.find(term => term[0] === id);
 const [key, name, definition, guidance, , demo] = term;
 const split = guidance.indexOf('. ');
 const purpose = split < 0 ? guidance : guidance.slice(0, split + 1);
 const rule = split < 0 ? '' : guidance.slice(split + 2);
 const index = String(group.terms.indexOf(term) + 1).padStart(2, '0');
 return `<article class="term-card ${variant}" id="term-${key}" aria-labelledby="title-${key}">
  <div class="term-copy"><div class="term-heading"><span class="term-index">${index}</span><h3 id="title-${key}">${name}</h3></div><p class="definition">${definition}</p><p class="purpose">${purpose}</p>${rule ? `<p class="rule"><strong>The rule</strong> ${rule}</p>` : ''}</div>
  <div class="experiment"><div class="experiment-head"><p class="try-prompt"><span>TRY</span> ${experiments[key]}</p><button class="reset" aria-label="Reset ${name} demo"><span aria-hidden="true">↺</span> Reset</button></div><div class="demo">${demo}</div><p class="behavior" aria-live="polite" aria-atomic="true" hidden></p></div>
 </article>`;
}

function sectionHead(id, number, title, invitation) {
 const collection = collections.find(group => group.id === id);
 return `<div class="collection-heading"><span class="collection-number">${number}</span><div><p class="eyebrow">${collection.title}</p><h2 id="${id}-title">${title}</h2></div><p class="section-invitation">${invitation}</p></div>`;
}

function renderCollections() {
 const t = termMarkup;
 document.querySelector('#collections').innerHTML = `
 <section class="collection anatomy-lab" id="navigation" aria-labelledby="navigation-title">
  ${sectionHead('navigation', '01', 'Find your way.', 'Take apart a page. See what each piece does.')}
  <div class="browser-lab"><div class="browser-bar"><span class="window-dots" aria-hidden="true">● ● ●</span><span>studio.example / a page, unpacked</span><span class="live-label">LIVE DEMO</span></div>
   <div class="anatomy-guide"><span>THE PARTS</span><span>A WEBSITE YOU CAN ACTUALLY TRY</span></div>
   ${t('header','anatomy-row')}${t('navigation-bar','anatomy-row')}${t('breadcrumbs','anatomy-row')}${t('hero','anatomy-row hero-row')}${t('footer','anatomy-row')}
  </div>
  <div class="subsection-title"><h3>When space gets tight.</h3><p>Two ways to keep navigation within reach.</p></div>
  <div class="space-lab">${t('hamburger','menu-experiment')}${t('drawer','drawer-experiment')}</div>
 </section>
 <section class="collection disclosure-lab" id="content" aria-labelledby="content-title">
  ${sectionHead('content', '02', 'Reveal a little.', 'Information doesn’t have to arrive all at once.')}
  <div class="discovery-pair">${t('card','event-experiment')}${t('carousel','carousel-experiment')}</div>
  <div class="disclosure-workbench">${t('accordion','wide-experiment')}${t('tabs','wide-experiment')}</div>
  <div class="subsection-title"><h3>A little context. Or your full attention.</h3><p>Compare three ways to show something extra.</p></div>
  <div class="overlay-lab">${t('tooltip','overlay-small')}${t('popover','overlay-medium')}${t('modal','overlay-large')}</div>
 </section>
 <section class="collection input-lab" id="input" aria-labelledby="input-title">
  ${sectionHead('input', '03', 'Make a move.', 'Press, choose, type. The interface listens.')}
  <div class="action-comparison"><div class="workbench-title"><span class="eyebrow">SPOT THE DIFFERENCE</span><h3>Looks similar.<br>Works differently.</h3></div><div>${t('icon','comparison-experiment')}${t('button-link','comparison-experiment')}</div></div>
  ${t('cta','cta-experiment')}
  <div class="subsection-title"><h3>Make it yours.</h3><p>Different answers call for different controls.</p></div>
  <div class="form-studio">${t('text','writing-experiment')}${t('choices','choice-experiment')}</div>
  <div class="settings-studio">${t('dropdown','setting-experiment')}${t('toggle','setting-experiment')}</div>
 </section>
 <section class="collection feedback-lab" id="feedback" aria-labelledby="feedback-title">
  ${sectionHead('feedback', '04', 'See what happens.', 'Good interfaces always keep you in the loop.')}
  <div class="results-studio"><div class="workbench-title"><span class="eyebrow">FROM A LOT TO JUST RIGHT</span><h3>Find your thing.</h3><p>Search for something you know.<br>Filter what’s relevant. Sort what’s left.</p></div><div class="results-tools">${t('search','search-experiment')}${t('filter','filter-experiment')}</div></div>
  ${t('pagination','pagination-experiment')}
  <div class="subsection-title"><h3>Message received.</h3><p>A count, a confirmation, a little reassurance.</p></div>
  <div class="feedback-console"><div>${t('badge','badge-experiment')}${t('toast','toast-experiment')}</div>${t('loading','loading-experiment')}</div>
  ${t('states','states-experiment')}
 </section>`;

 document.querySelectorAll('.term-card').forEach(card => {
  const original = card.querySelector('.demo').innerHTML;
  card.querySelector('.reset').addEventListener('click', () => {
   if (card.cleanup) card.cleanup();
   card.querySelector('.demo').innerHTML = original;
   const feedback = card.querySelector('.behavior');
   feedback.replaceChildren();
   feedback.hidden = true;
   setupDemo(card);
  });
  setupDemo(card);
 });
}

// Announce the result once, without repeating the instructions after every action.
function report(card, did, changed, back) {
 const area = card.querySelector('.behavior');
 area.hidden = false;
 area.replaceChildren();
 const result = document.createElement('strong');
 result.textContent = changed;
 const returnHint = document.createElement('span');
 returnHint.textContent = back;
 area.append(result, returnHint);
}
function setupDemo(card) {
 const id=card.id.replace('term-',''), $=s=>card.querySelector(s), $$=s=>[...card.querySelectorAll(s)];
 const on=(s,event,fn)=>$(s)?.addEventListener(event,fn);
 if(id==='header'){
  const toggle=(open)=>{$('.account-panel').hidden=!open;$('[data-action=account]').setAttribute('aria-expanded',open);report(card,open?'Opened Account.':'Closed Account.',open?'Account details are visible.':'Account details are hidden.','Use the Account button again.');};
  on('[data-action=account]','click',()=>toggle($('.account-panel').hidden));
  on('[data-action=account-close]','click',()=>{toggle(false);$('[data-action=account]').focus();});
  on('input','input',e=>{$('.header-result').textContent=e.target.value?`Searching the sample site for “${e.target.value}”.`:'Branding, search, and account. One familiar place.';report(card,'Typed in search.','The header shows your search query.','Clear the field or reset.');});
 }
 if(id==='navigation-bar') $$('.demo-nav a').forEach(link=>link.addEventListener('click',e=>{
  e.preventDefault();$$('.demo-nav a').forEach(a=>a.removeAttribute('aria-current'));link.setAttribute('aria-current','page');
  const page=link.dataset.page;$('.nav-page').id=link.hash.slice(1);$('.nav-page h4').textContent={Home:'Welcome home.',Events:'What’s coming up?',About:'A little about us.'}[page];$('.nav-page p').textContent={Home:'A place for curious minds.',Events:'Design meetup · Friday at 4 pm.',About:'We make space to learn together.'}[page];report(card,`Followed ${page}.`,'The sample page and current link changed.','Choose Home.');
 }));
 if(id==='hamburger'){
  const toggle=open=>{$('#mobile-menu').hidden=!open;$('[data-action=hamburger]').setAttribute('aria-expanded',open);$('.menu-label').textContent=open?'Close menu':'Menu';report(card,open?'Opened the menu.':'Closed the menu.',open?'Navigation links are visible.':'Navigation links are hidden.','Use the menu button or Escape.');};
  on('[data-action=hamburger]','click',()=>toggle($('#mobile-menu').hidden));on('.demo','keydown',e=>{if(e.key==='Escape'){toggle(false);$('[data-action=hamburger]').focus();}});$$('.local-menu a').forEach(a=>a.addEventListener('click',()=>toggle(false)));
 }
 if(id==='drawer'){
  const toggle=open=>{$('.drawer').hidden=!open;$('[data-action=drawer]').setAttribute('aria-expanded',open);(open?$('[data-action=drawer-close]'):$('[data-action=drawer]')).focus();report(card,open?'Opened the drawer.':'Closed the drawer.','The permanent sidebar stays in place.','Use Close or Escape.');};
  on('[data-action=drawer]','click',()=>toggle(true));on('[data-action=drawer-close]','click',()=>toggle(false));on('.demo','keydown',e=>{if(e.key==='Escape'&&!$('.drawer').hidden)toggle(false);});$$('.drawer a').forEach(a=>a.addEventListener('click',()=>toggle(false)));
 }
 if(id==='breadcrumbs'){
  const render=level=>{const names=['Home','Furniture','Desks'];$('.breadcrumbs').innerHTML=names.slice(0,level+1).map((name,i)=>`${i?'<span aria-hidden="true">›</span>':''}${i===level?`<span aria-current="page">${name}</span>`:`<a href="#crumb-${name.toLowerCase()}" data-level="${i}">${name}</a>`}`).join('');$('.crumb-page').textContent=[ 'Home · Browse every department.', 'Furniture · Chairs, tables, and desks.', 'Desks · Find your next workspace.' ][level];$$('.breadcrumbs a').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();render(Number(a.dataset.level));report(card,`Followed ${a.textContent}.`,'Moved to a parent page.','Reset to return to Desks.');}));};render(2);
 }
 if(id==='hero')on('[data-action=hero]','click',()=>{$('.mini-hero h4').textContent='You’re ready to begin.';$('.mini-hero p').textContent='First lesson: notice the interfaces around you.';$('[data-action=hero]').textContent='Lesson started';$('[data-action=hero]').disabled=true;report(card,'Clicked Start learning.','The main action opened a sample lesson.','Reset to see the introduction.');});
 if(id==='footer'){
  $$('[data-footer]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();$('.footer-panel').hidden=false;$('.footer-panel').id=a.hash.slice(1);$('.footer-panel p').textContent={Contact:'Contact: visit your course discussion board for help.',Privacy:'Privacy: these demos run in your browser. Form entries are not sent anywhere.',Accessibility:'Accessibility: all demos can be used with a keyboard. Press Tab to move between controls.'}[a.dataset.footer];report(card,`Followed ${a.dataset.footer}.`,'Supporting information is visible.','Close information.');}));on('[data-action=footer-close]','click',()=>{$('.footer-panel').hidden=true;report(card,'Closed the information.','The footer is back to its original view.','Choose another footer link.');});
 }
 if(typeof setupMoreDemos==='function')setupMoreDemos(card,id,$,$$,on);
}

collections.push(
 {id:'content',title:'Content & Disclosure',description:'Organize information and reveal just enough, right when it’s needed.',terms:[
 ['card','Card','A small container that groups a preview of one item.','Helps users scan related details together. Keep the title, visual, and action connected to the same item.','Open the event details, then close them to return to the preview.',`<article class="event-card"><div class="event-visual" role="img" aria-label="Design lab event visual"><span class="big-type">Aa</span><span>DESIGN<br>LAB / 01</span></div><div class="event-copy"><time datetime="2026-10-16">FRIDAY, OCTOBER 16</time><h4>Design something together.</h4><p>A friendly, hands-on introduction to interface design.</p><button data-action="event" aria-expanded="false">View event</button><p class="event-details" hidden>Room 204 · 4–5 pm · Bring a notebook. Everyone is welcome.</p></div></article>`],
 ['accordion','Accordion','A heading that expands or collapses the information below it.','Helps users find answers without seeing everything at once. Make the entire heading clickable.','Click an FAQ heading to reveal its answer. Click it again to collapse it.',`<details><summary>Do I need to know how to code?</summary><p>No. Start by trying the examples and noticing what changes.</p></details><details><summary>Can I use the keyboard?</summary><p>Yes. Tab moves between controls. Enter or Space activates buttons.</p></details><details><summary>How do I start over?</summary><p>Each demo has a Reset button. It only resets that example.</p></details>`],
 ['tabs','Tabs','Labeled controls that switch between related content panels.','Help users compare related views. Show one panel at a time and make the selected tab clear.','Choose a tab, or use arrow keys while a tab is focused. Choose Overview to return.',`<div class="tabs" role="tablist" aria-label="Notebook details"><button id="tab-overview" role="tab" aria-selected="true" aria-controls="panel-overview">Overview</button><button id="tab-reviews" role="tab" aria-selected="false" aria-controls="panel-reviews" tabindex="-1">Reviews</button><button id="tab-specifications" role="tab" aria-selected="false" aria-controls="panel-specifications" tabindex="-1">Specifications</button></div><div class="tab-panel" role="tabpanel" id="panel-overview" aria-labelledby="tab-overview" tabindex="0"><h4>A notebook for your next idea.</h4><p>Dot-grid pages, a soft cover, and room to experiment.</p></div><div class="tab-panel" role="tabpanel" id="panel-reviews" aria-labelledby="tab-reviews" tabindex="0" hidden><h4>4.8 out of 5 · 24 reviews</h4><p>“Perfect for sketching my first wireframes.”</p></div><div class="tab-panel" role="tabpanel" id="panel-specifications" aria-labelledby="tab-specifications" tabindex="0" hidden><h4>Small enough to go anywhere.</h4><p>A5 size · 160 pages · Recycled paper</p></div>`],
 ['carousel','Carousel','A viewer that moves through a sequence of items.','Lets users browse one item at a time. Provide previous and next controls and a position indicator.','Use Next or Previous to switch panels. This example wraps from the last item to the first.',`<div class="carousel-panel" data-slide="0" role="group" aria-roledescription="slide" aria-label="1 of 3"><span>THE CREATIVE PROCESS</span><strong>01. Explore</strong></div><div class="carousel-controls"><button data-action="previous">Previous</button><span class="slide-count" aria-live="polite">1 of 3</span><button data-action="next">Next</button></div>`],
 ['modal','Modal dialog','A dialog over the page that blocks interaction with the page behind it.','Focuses users on a decision. Move focus inside, allow Escape, and return focus when it closes.','Open Delete item. Cancel, Close, or Escape keeps the item; Delete removes only this sample.',`<div class="mini-panel sample-item row between"><span>My first wireframe</span><span class="badge">Draft</span></div><div class="row" style="margin-top:16px"><button data-action="delete" class="danger">Delete item</button></div><p class="small-note">A safe place to try a consequential action.</p>`],
 ['popover','Popover','A small floating panel attached to a control.','Shows nearby options without taking over the page. Close it when the user clicks outside or presses Escape.','Open More options and choose an action. Click outside the panel to dismiss it.',`<p>My design notes</p><div class="popover-anchor"><button data-popover="extra-options" aria-expanded="false" aria-controls="extra-options">••• More options</button><div class="popover" id="extra-options" hidden><button data-option="Pinned">Pin to top</button><button data-option="Duplicated">Make a copy</button><button data-option="Archived">Archive</button></div></div><p class="small-note option-result">A little more room for secondary actions.</p>`],
 ['tooltip','Tooltip','A short explanation associated with an element.','Clarifies a control without cluttering the page. Show it on hover and focus; keep essential information visible.','Hover over the info icon or focus it with Tab. Move away or press Escape to hide the tip.',`<div class="tooltip-anchor"><span>Autosave</span><button class="info-icon" aria-label="About autosave" aria-describedby="autosave-tip">i</button><span role="tooltip" class="tooltip" id="autosave-tip">Autosave keeps your changes as you work.</span></div><p class="small-note">Try a mouse, or use your keyboard.</p>`]
 ]},
 {id:'input',title:'Actions & Input',description:'Give people clear ways to take action and tell you what they need.',terms:[
 ['icon','Icon / Icon Button','An icon is a visual symbol. An icon button uses that symbol to perform an action.','Helps users recognize an action quickly. Give icon buttons an accessible name and a visible state.','Click the heart to save this example. Click again to remove it from saved items.',`<div class="comparison"><div><span>ICON · A SYMBOL</span><span class="heart" style="font-size:28px;color:var(--accent)" role="img" aria-label="Heart">♡</span><p class="small-note">This one is just a symbol.</p></div><div><span>ICON BUTTON · AN ACTION</span><button class="heart-button" aria-pressed="false"><span class="heart" aria-hidden="true">♡</span><span class="save-label">Save</span></button><p class="small-note">This one does something.</p></div></div>`],
 ['button-link','Button / Link','A button performs an action. A link navigates to a page or a place.','Helps users predict what happens next. Use a button for changes and a link for destinations.','Click the button to change the preview. Follow the link to Content & Disclosure; use the section guide to return.',`<div class="comparison"><div><span>BUTTON</span><button data-action="highlight">Highlight preview</button><p class="action-preview">A small idea.</p></div><div><span>LINK</span><a href="#content">Explore content terms</a><p class="small-note">Takes you to another section.</p></div></div>`],
 ['cta','CTA — Call to Action','A prominent action that supports the page’s main goal.','Helps users know what to do next. Use a specific label and make the main action stand out.','Click Start Learning to open the first sample lesson. Reset starts this demo over.',`<h4>Ready to try something new?</h4><p class="small-note cta-copy">Your first lesson is one click away.</p><div class="row" style="margin-top:18px"><button class="primary cta-demo" data-action="start">Start Learning</button><button data-action="later">Maybe later</button></div>`],
 ['text','Text Field / Text Area','A text field holds a short answer. A text area gives longer answers room to breathe.','Let users write in their own words. Give each control a visible label; placeholders are just hints.','Type in either field. Edit or clear your writing, or reset both. Nothing is submitted.',`<div class="field"><label for="student-name">Name</label><input id="student-name" placeholder="e.g. Alex" autocomplete="off"></div><div class="field"><label for="reflection">Reflection</label><textarea id="reflection" placeholder="What did you notice about these interfaces?"></textarea></div><p class="small-note text-count">0 characters in your reflection</p>`],
 ['dropdown','Dropdown / Select','An action dropdown offers commands. A select menu lets users choose a value.','Keep actions distinct from settings. Label the select, and show the chosen value.','Choose an action, then select a language. The label below updates; reset restores English.',`<div class="row between"><div class="popover-anchor"><button data-popover="action-options" aria-expanded="false" aria-controls="action-options">Actions ▾</button><div class="popover" id="action-options" hidden><button data-option="Duplicated">Duplicate note</button><button data-option="Archived">Archive note</button></div></div><div class="field"><label for="language">Language</label><select id="language"><option>English</option><option>Spanish</option><option>French</option></select></div></div><p class="small-note option-result">Choose a command or a language.</p><p class="language-preview">Hello! · English selected</p>`],
 ['choices','Checkbox / Radio Button','Checkboxes allow independent selections. Radio buttons allow one choice from a group.','Help users express preferences. Group related choices and make each label clickable.','Select any interests and one delivery method. Uncheck interests or choose a different method to change them.',`<div class="comparison"><fieldset><legend>Choose interests</legend><div class="choices"><label><input type="checkbox" name="interest" value="Coding">Coding</label><label><input type="checkbox" name="interest" value="Design">Design</label><label><input type="checkbox" name="interest" value="AI">AI</label></div></fieldset><fieldset><legend>Choose one delivery method</legend><div class="choices"><label><input type="radio" name="delivery" value="Email" checked>Email</label><label><input type="radio" name="delivery" value="Text message">Text message</label><label><input type="radio" name="delivery" value="App notification">App notification</label></div></fieldset></div><p class="small-note choice-result" style="margin-top:15px">No interests selected · Delivery: Email</p>`],
 ['toggle','Toggle Switch / Slider','A toggle switches between two states. A slider selects a value along a range.','Help users adjust settings directly. Name each control and show its current state or value.','Switch sound on or off and adjust the volume. These are sample settings; no audio plays.',`<div class="row between"><label id="sound-label">Sound <span class="sound-state">On</span></label><button class="switch" role="switch" aria-checked="true" aria-labelledby="sound-label"></button></div><div class="field" style="margin-top:23px"><label for="volume" class="row between">Volume <output for="volume" id="volume-output">50%</output></label><input id="volume" class="volume" type="range" min="0" max="100" value="50"></div><p class="small-note">Keyboard tip: use arrow keys on the slider.</p>`]
 ]},
 {id:'feedback',title:'Results, Feedback & States',description:'Show what happened, what’s available, and what people can do next.',terms:[
 ['search','Search / Autocomplete','Search finds matches. Autocomplete suggests choices while you type.','Helps users find a known item faster. Show useful matches and support keyboard selection.','Type part of a destination. Select a suggestion, or use ↓ / ↑ and Enter. Clear the field to start again.',`<div class="field search-container"><label for="destination">Find a destination</label><input id="destination" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="destination-list" autocomplete="off" placeholder="Try “Lon”…"><ul id="destination-list" class="suggestions" role="listbox" aria-label="Destinations" hidden></ul></div><p class="small-note search-result" role="status">Five places to explore: New York, London, Tokyo, Paris, Madrid.</p>`],
 ['filter','Filter / Sort','A filter narrows the results. Sorting changes their order.','Help users find relevant items. Keep the selected filter visible and show the actual matching results.','Filter by price and change the sort order. Clear the checkbox to show every result again.',`<div class="row between"><label><input type="checkbox" id="under150"> Under $150</label><div class="field"><label for="sort">Sort by</label><select id="sort"><option value="default">Featured</option><option value="asc">Price: Low to High</option><option value="desc">Price: High to Low</option></select></div></div><ul class="product-list"></ul><p class="small-note result-count" role="status"></p>`],
 ['pagination','Pagination','Controls that divide a longer list of results into pages.','Help users move through manageable groups. Mark the current page and disable unavailable directions.','Choose a page number or Next. Use Previous or page 1 to return.',`<ul class="product-list paged-results" aria-live="polite"></ul><nav class="pagination" aria-label="Example results pages" style="margin-top:14px"><button data-page="prev">Previous</button><button data-page="1" aria-current="page" aria-label="Page 1">1</button><button data-page="2" aria-label="Page 2">2</button><button data-page="3" aria-label="Page 3">3</button><button data-page="next">Next</button></nav><p class="small-note page-info">Page 1 of 3</p>`],
 ['badge','Badge','A small label that communicates a status or a count.','Helps users notice new or unread items. Use meaningful text; color alone should not carry the message.','Mark messages as read to change the count. Reset restores three unread messages.',`<div class="row between"><span>Design foundations</span><span class="badge">New</span></div><div class="row between" style="margin:20px 0"><span>Inbox</span><span class="badge unread-badge">3 unread</span></div><button data-action="read">Mark one as read</button>`],
 ['toast','Toast / Banner','A toast is temporary feedback. A banner stays visible until resolved or dismissed.','Tell users what happened. Use temporary messages for confirmations and persistent ones for ongoing issues.','Click Save for a four-second toast. The service banner stays until you dismiss it; reset brings it back.',`<button class="primary" data-action="toast">Save</button><p class="small-note">A brief confirmation appears at the bottom of the page.</p><div class="banner" role="status"><span>Service temporarily unavailable.</span><button data-action="dismiss-banner" aria-label="Dismiss service banner">×</button></div>`],
 ['loading','Loading / Progress Indicator','A spinner signals ongoing work. A progress bar shows how much is complete.','Help users understand waiting. Use a spinner for unknown duration and a progress bar for measurable work.','Start the simulated upload. Watch the progress reach 100%; reset cancels or clears it.',`<div class="row"><span class="spinner" aria-hidden="true"></span><span class="small-note">Spinner example · work in progress</span></div><progress max="100" value="0" aria-label="Sample upload progress"></progress><div class="row between"><span class="upload-value" role="status">Ready to upload · 0%</span><button class="primary" data-action="upload">Start upload</button></div>`],
 ['states','Empty / Error / Disabled States','States explain why content is missing, an action failed, or a control is unavailable.','Help users understand what to do next. Offer a useful next step for empty and error states, and explain disabled controls.','Create a sample project, retry the failed action, or accept the demo terms to enable Continue. Reset restores all three.',`<div class="states"><section class="state"><span class="state-symbol" aria-hidden="true">□</span><strong>Empty</strong><p class="empty-message">No saved projects yet.</p><button data-action="create">Create a project</button></section><section class="state"><span class="state-symbol" aria-hidden="true">!</span><strong>Error</strong><p class="error-message">Something went wrong.</p><button data-action="retry">Try again</button></section><section class="state"><span class="state-symbol" aria-hidden="true">⊘</span><strong>Disabled</strong><p id="disabled-reason">Accept the demo terms to continue.</p><label><input type="checkbox" id="demo-terms"> I accept the demo terms</label><button data-action="continue" disabled aria-describedby="disabled-reason">Continue</button><small>A practice control; no real agreement.</small></section></div>`]
 ]}
);

// Native HTML handles form controls, FAQ disclosure, and dialog focus trapping.
function setupMoreDemos(card,id,$,$$,on){
 if(id==='card')on('[data-action=event]','click',()=>{const open=$('.event-details').hidden;$('.event-details').hidden=!open;$('[data-action=event]').textContent=open?'Close details':'View event';$('[data-action=event]').setAttribute('aria-expanded',open);report(card,open?'Opened the event.':'Closed the details.',open?'Location and time are visible.':'The compact preview is back.','Use the event button again.');});
 if(id==='accordion')$$('details').forEach(el=>el.addEventListener('toggle',()=>{if(!el.isConnected)return;report(card,`${el.open?'Opened':'Closed'} an FAQ heading.`,el.open?'The answer became visible.':'The answer is hidden.','Click the same heading again.');}));
 if(id==='tabs'){
  const tabs=$$('[role=tab]');const activate=i=>{tabs.forEach((t,j)=>{t.setAttribute('aria-selected',i===j);t.tabIndex=i===j?0:-1;$('#'+t.getAttribute('aria-controls')).hidden=i!==j;});report(card,`Selected ${tabs[i].textContent}.`,'Only the selected panel is visible.','Select Overview.');};
  tabs.forEach((t,i)=>{t.addEventListener('click',()=>activate(i));t.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(i+1)%3;if(e.key==='ArrowLeft')next=(i+2)%3;if(e.key==='Home')next=0;if(e.key==='End')next=2;if(next!==undefined){e.preventDefault();activate(next);tabs[next].focus();}});});
 }
 if(id==='carousel'){
  let i=0;const move=step=>{i=(i+step+3)%3;$('.carousel-panel').dataset.slide=i;$('.carousel-panel').setAttribute('aria-label',`${i+1} of 3`);$('.carousel-panel strong').textContent=['01. Explore','02. Make','03. Refine'][i];$('.slide-count').textContent=`${i+1} of 3`;report(card,step>0?'Clicked Next.':'Clicked Previous.',`Panel ${i+1} of 3 is visible.`,'Use the opposite button or reset.');};on('[data-action=previous]','click',()=>move(-1));on('[data-action=next]','click',()=>move(1));
 }
 if(id==='modal')on('[data-action=delete]','click',()=>{document.querySelector('#delete-dialog').showModal();report(card,'Clicked Delete item.','A modal blocks the rest of the page.','Choose Cancel, Close, or Escape.');});
 if(id==='popover'||id==='dropdown'){
  const trigger=$('[data-popover]'),panel=$('.popover');const close=()=>{panel.hidden=true;trigger.setAttribute('aria-expanded','false');};
  const outside=e=>{if(!card.contains(e.target))close();else if(!e.target.closest('.popover-anchor'))close();};
  document.addEventListener('click',outside);card.cleanup=()=>document.removeEventListener('click',outside);
  trigger.addEventListener('click',()=>{panel.hidden=!panel.hidden;trigger.setAttribute('aria-expanded',!panel.hidden);report(card,panel.hidden?'Closed the options.':'Opened the options.',panel.hidden?'The floating panel is hidden.':'Extra actions are visible beside the button.','Click outside or press Escape.');});
  on('.demo','keydown',e=>{if(e.key==='Escape'&&!panel.hidden){close();trigger.focus();}});
  $$('[data-option]').forEach(b=>b.addEventListener('click',()=>{$('.option-result').textContent=b.dataset.option+' the sample note.';close();trigger.focus();report(card,`Chose ${b.textContent}.`,'The example action is confirmed below the button.','Reset the demo.');}));
  on('#language','change',e=>{$('.language-preview').textContent={English:'Hello!',Spanish:'¡Hola!',French:'Bonjour!'}[e.target.value]+` · ${e.target.value} selected`;report(card,`Selected ${e.target.value}.`,'The language value and greeting changed.','Choose English or reset.');});
 }
 if(id==='tooltip'){
  const anchor=$('.tooltip-anchor');on('.info-icon','keydown',e=>{if(e.key==='Escape')anchor.classList.add('dismissed');});anchor.addEventListener('mouseleave',()=>anchor.classList.remove('dismissed'));on('.info-icon','blur',()=>anchor.classList.remove('dismissed'));on('.info-icon','focus',()=>anchor.classList.remove('dismissed'));
 }
 if(id==='icon')on('.heart-button','click',()=>{const saved=$('.heart-button').getAttribute('aria-pressed')!=='true';$('.heart-button').setAttribute('aria-pressed',saved);$('.heart-button .heart').textContent=saved?'♥':'♡';$('.save-label').textContent=saved?'Saved':'Save';report(card,'Clicked the heart.',saved?'The item is saved.':'The item is no longer saved.','Click the heart again.');});
 if(id==='button-link')on('[data-action=highlight]','click',()=>{const el=$('.action-preview'),active=el.classList.toggle('badge');$('[data-action=highlight]').textContent=active?'Remove highlight':'Highlight preview';report(card,'Clicked the button.','The preview style changed without navigation.','Click the button again.');});
 if(id==='cta'){
  on('[data-action=start]','click',()=>{$('.cta-copy').textContent='Lesson 1: identify a button and a link.';$('[data-action=start]').textContent='Learning started';$('[data-action=start]').disabled=true;report(card,'Clicked Start Learning.','The first sample lesson appeared.','Reset this demo.');});on('[data-action=later]','click',()=>{$('.cta-copy').textContent='No rush. Your first lesson will be here.';report(card,'Chose Maybe later.','The lesson is still available.','Choose Start Learning when ready.');});
 }
 if(id==='text')$$('input,textarea').forEach(el=>el.addEventListener('input',()=>{$('.text-count').textContent=`${$('#reflection').value.length} characters in your reflection`;report(card,`Typed in ${el.id==='reflection'?'Reflection':'Name'}.`,'Your writing is visible in the field.','Edit, clear, or reset the fields.');}));
 if(id==='choices')$$('input').forEach(el=>el.addEventListener('change',()=>{const interests=$$('input[name=interest]:checked').map(i=>i.value);$('.choice-result').textContent=`${interests.join(', ')||'No interests selected'} · Delivery: ${$('input[name=delivery]:checked').value}`;report(card,'Changed a selection.','Interests can combine; delivery stays a single choice.','Uncheck interests or select another delivery method.');}));
 if(id==='toggle'){
  on('.switch','click',()=>{const enabled=$('.switch').getAttribute('aria-checked')!=='true';$('.switch').setAttribute('aria-checked',enabled);$('.sound-state').textContent=enabled?'On':'Off';report(card,'Changed the sound setting.',`Sound is ${enabled?'on':'off'} in this demo.`,'Click the switch again.');});on('#volume','input',e=>{$('#volume-output').textContent=e.target.value+'%';report(card,'Moved the slider.',`Volume is ${e.target.value}%.`,'Move it back to 50% or reset.');});
 }
 if(id==='search'){
  const input=$('#destination'), list=$('.suggestions'), places=['New York','London','Tokyo','Paris','Madrid'];let matches=[],active=-1;
  const close=()=>{list.hidden=true;input.setAttribute('aria-expanded','false');input.removeAttribute('aria-activedescendant');active=-1;};
  const choose=value=>{input.value=value;close();$('.search-result').textContent=`Destination selected: ${value}.`;report(card,`Selected ${value}.`,'The suggestion filled the search field.','Clear the field or reset.');};
  const draw=()=>{const query=input.value.trim().toLowerCase();matches=query?places.filter(p=>p.toLowerCase().includes(query)):[];active=-1;list.innerHTML='';matches.forEach((p,i)=>{const li=document.createElement('li');li.id=`destination-${i}`;li.setAttribute('role','option');li.setAttribute('aria-selected','false');li.textContent=p;li.addEventListener('mousedown',e=>e.preventDefault());li.addEventListener('click',()=>choose(p));list.append(li);});list.hidden=!matches.length;input.setAttribute('aria-expanded',!!matches.length);input.removeAttribute('aria-activedescendant');$('.search-result').textContent=query?(matches.length?`${matches.length} suggestion${matches.length===1?'':'s'} available.`:'No matching destinations. Try another name.'):'Five places to explore: New York, London, Tokyo, Paris, Madrid.';};
  input.addEventListener('input',draw);input.addEventListener('keydown',e=>{if(e.key==='Escape'){close();return;}if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();if(list.hidden)draw();if(!matches.length)return;active=(active+(e.key==='ArrowDown'?1:-1)+matches.length)%matches.length;[...list.children].forEach((li,i)=>li.setAttribute('aria-selected',i===active));input.setAttribute('aria-activedescendant',`destination-${active}`);}if(e.key==='Enter'&&!list.hidden&&active>=0){e.preventDefault();choose(matches[active]);}});input.addEventListener('blur',close);
 }
 if(id==='filter'){
  const products=[{name:'Design workshop',price:180},{name:'Sketching essentials',price:45},{name:'Intro to creative coding',price:120}];
  const draw=()=>{let items=products.filter(p=>!$('#under150').checked||p.price<150);const sort=$('#sort').value;if(sort!=='default')items.sort((a,b)=>sort==='asc'?a.price-b.price:b.price-a.price);$('.product-list').innerHTML=items.map(p=>`<li><span>${p.name}</span><strong>$${p.price}</strong></li>`).join('');$('.result-count').textContent=`${items.length} of ${products.length} events`;};draw();$$('input,select').forEach(el=>el.addEventListener('change',()=>{draw();report(card,'Changed a filter or sort.','The event list updated.','Clear the filter and choose Featured, or reset.');}));
 }
 if(id==='pagination'){
  let page=1;const items=['Build your first wireframe','Understand visual hierarchy','Choose readable type','Design a helpful form','Write clear button labels','Test with a keyboard'];
  const draw=()=>{$('.paged-results').innerHTML=items.slice((page-1)*2,page*2).map((name,i)=>`<li><span>${String((page-1)*2+i+1).padStart(2,'0')} · ${name}</span></li>`).join('');$$('[data-page]').forEach(b=>{b.removeAttribute('aria-current');if(Number(b.dataset.page)===page)b.setAttribute('aria-current','page');b.disabled=(page===1&&b.dataset.page==='prev')||(page===3&&b.dataset.page==='next');});$('.page-info').textContent=`Page ${page} of 3 · 2 of 6 lessons`;};draw();$$('[data-page]').forEach(b=>b.addEventListener('click',()=>{page=b.dataset.page==='prev'?page-1:b.dataset.page==='next'?page+1:Number(b.dataset.page);draw();report(card,`Chose page ${page}.`,'Two different sample lessons are visible.','Choose page 1.');}));
 }
 if(id==='badge'){
  let count=3;on('[data-action=read]','click',()=>{count=Math.max(0,count-1);$('.unread-badge').textContent=count?`${count} unread`:'All read';$('[data-action=read]').disabled=count===0;report(card,'Marked one message as read.',count?`${count} unread messages remain.`:'All messages are read.','Reset restores 3 unread.');});
 }
 if(id==='toast'){
  on('[data-action=toast]','click',()=>{clearTimeout(window.toastTimer);const toast=document.querySelector('#toast');toast.hidden=false;window.toastTimer=setTimeout(()=>{toast.hidden=true;},4000);report(card,'Clicked Save.','A temporary toast confirms success; the banner is separate.','The toast disappears automatically after four seconds.');});on('[data-action=dismiss-banner]','click',()=>{$('.banner').hidden=true;$('[data-action=toast]').focus();report(card,'Dismissed the banner.','The persistent notice is hidden.','Reset shows it again.');});card.cleanup=()=>{clearTimeout(window.toastTimer);document.querySelector('#toast').hidden=true;};
 }
 if(id==='loading'){
  let timer=null;card.cleanup=()=>clearInterval(timer);on('[data-action=upload]','click',()=>{let value=0;const button=$('[data-action=upload]');button.disabled=true;button.textContent='Uploading…';$('progress').value=0;$('.upload-value').textContent='Uploading · 0%';report(card,'Started the simulated upload.','The progress bar is moving toward 100%.','Reset cancels the upload.');timer=setInterval(()=>{value+=10;$('progress').value=value;$('.upload-value').textContent=value===100?'Upload complete · 100%':`Uploading · ${value}%`;if(value===100){clearInterval(timer);button.disabled=false;button.textContent='Upload again';report(card,'Waited for the upload.','The progress reached 100%.','Upload again or reset.');}},350);});
 }
 if(id==='states'){
  on('[data-action=create]','click',()=>{$('.empty-message').textContent='My first project · Created';$('[data-action=create]').disabled=true;report(card,'Created a sample project.','The empty state now has an item.','Reset removes the sample project.');});on('[data-action=retry]','click',()=>{$('.error-message').textContent='It worked! Your content is ready.';$('[data-action=retry]').disabled=true;report(card,'Clicked Try again.','The sample error changed to success.','Reset restores the error example.');});on('#demo-terms','change',e=>{$('[data-action=continue]').disabled=!e.target.checked;$('#disabled-reason').textContent=e.target.checked?'You can now continue.':'Accept the demo terms to continue.';report(card,e.target.checked?'Checked the demo terms.':'Unchecked the demo terms.',e.target.checked?'Continue is enabled.':'Continue is disabled.','Change the checkbox again.');});on('[data-action=continue]','click',()=>{$('#disabled-reason').textContent='You continued successfully.';report(card,'Clicked Continue.','The enabled button completed the sample action.','Reset this demo.');});
 }
}

renderCollections();
// One shared modal uses the browser's built-in focus containment and Escape behavior.
const dialog=document.querySelector('#delete-dialog');
// Keep Tab inside the dialog even in browsers that otherwise move to browser chrome.
dialog.addEventListener('keydown',event=>{
 if(event.key!=='Tab')return;
 const controls=[...dialog.querySelectorAll('button:not(:disabled)')];
 const first=controls[0],last=controls[controls.length-1];
 if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
 else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
});
document.querySelector('#cancel-delete').addEventListener('click',()=>dialog.close('cancel'));
document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close('cancel'));
document.querySelector('#confirm-delete').addEventListener('click',()=>{
 const card=document.querySelector('#term-modal');card.querySelector('.sample-item').innerHTML='<span>Item deleted. Reset to restore it.</span>';card.querySelector('[data-action=delete]').disabled=true;dialog.close('deleted');
});
dialog.addEventListener('close',()=>{const card=document.querySelector('#term-modal');const deleted=dialog.returnValue==='deleted';report(card,deleted?'Confirmed Delete.':'Closed the dialog. ',deleted?'The sample item was deleted.':'The item is still here.','Reset to restore the demo.');if(deleted)card.querySelector('.reset').focus();});
dialog.addEventListener('cancel',()=>{dialog.returnValue='cancel';});
// Scroll positions, not entry ordering, determine the current lab.
const sectionLinks = [...document.querySelectorAll('.section-nav nav a')];
const sections = [...document.querySelectorAll('.collection')];
let scrollPending = false;
function updateSectionGuide() {
 const offset = document.querySelector('.section-nav').getBoundingClientRect().height + 70;
 let current = sections[0].id;
 for (const section of sections) {
  if (section.getBoundingClientRect().top <= offset) current = section.id;
 }
 sectionLinks.forEach(link => {
  const active = link.hash === '#' + current;
  link.classList.toggle('active', active);
  if (active) link.setAttribute('aria-current', 'location');
  else link.removeAttribute('aria-current');
 });
 scrollPending = false;
}
window.addEventListener('scroll', () => {
 if (!scrollPending) { scrollPending = true; requestAnimationFrame(updateSectionGuide); }
}, { passive: true });
window.addEventListener('resize', updateSectionGuide);
updateSectionGuide();
