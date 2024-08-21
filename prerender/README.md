## Prerender

### Testing
Emulate a normal user request:
```bash
curl -A Chrome localhost/
curl -A Chrome https://interaktywnamapa.bierun.pl/
```

Emulate a crawler request:
```bash
curl -A Googlebot localhost/mapa/start
curl -A Googlebot https://interaktywnamapa.bierun.pl/

```
