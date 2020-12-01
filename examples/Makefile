# https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/

cert: key.pem cert.pem

cert.pem: key.pem csr.pem
	openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out $@

key.pem:
	openssl genrsa -out $@

csr.pem: key.pem
	openssl req -new -sha256 -key $< -out $@

.INTERMEDIATE: csr.pem

clean:
	rm -f key.pem csr.pem cert.pem
