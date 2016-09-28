# Atmos Events Design

A sample design for the Atmos Events Schedule page. The schedule would soon be hosted live on https://bits-atmos.org

## Suggestion

Try to create the nesting structure as follows and the scrolling would be on the `.content` field so that both the events as well as timeline scrolls. Added benefit would be having the timeline in it's own element so that centering the circles and the timeline would be easy.

```
body
	div .header
		{leave this as it is}
	div .maincontent
		div .sidebar
			{leave this as it is}
		div .content
			div .timeline
				div #vertical-line
				ul #circles
					{leave this as it is}
			div .events
				ul #events
					{insert sub events here}
```
