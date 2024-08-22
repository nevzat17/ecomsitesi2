# Node.js imajını kullanıyoruz
FROM node:alpine

# Çalışma dizinini oluşturuyoruz
WORKDIR /usr/src/app

# http-server'ı global olarak kuruyoruz
RUN npm install -g http-server

# Proje dosyalarını konteynıra kopyalıyoruz
COPY . .

# HTTP Server'ı 3030 portunda çalışacak şekilde başlatıyoruz
EXPOSE 3030

# CMD komutundaki tüm öğeleri string olarak belirtmelisiniz
CMD ["http-server", "-p", "3030"]
