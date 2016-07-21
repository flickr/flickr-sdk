install: .git/hooks/pre-commit
install: .git/hooks/pre-push

.git/hooks/pre-commit: script/hook.sh
	cp $< $@

.git/hooks/pre-push: script/hook.sh
	cp $< $@

release-major:
	npm version major
	git push origin --tags
	git push origin master
	npm publish

release-minor:
	npm version minor
	git push origin --tags
	git push origin master
	npm publish

release-patch:
	npm version patch
	git push origin --tags
	git push origin master
	npm publish
