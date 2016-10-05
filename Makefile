#!/usr/bin/env make

install: .git/hooks/pre-commit
install: .git/hooks/pre-push

.git/hooks/pre-commit: hook.sh
	cp $< $@

.git/hooks/pre-push: hook.sh
	cp $< $@
