#include <arpa/inet.h>
#include <netinet/in.h> 
#include <netinet/ip6.h>
#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <sys/socket.h>
#include <sys/types.h>

#define BUFFER_SIZE 10

struct sockaddr_in6 server;
struct sockaddr_in server4;

const char* message = "GET /wiki/Heartbleed HTTP/1.1\r\n\r\n";
int handle;

char buffer[BUFFER_SIZE];
int miMetodo(){
    printf("algo\n");
}
char result[1000];

int main(char** args){

/*
    char buffer[BUFFER_SIZE];
    char result[30];
*/
    strcpy(&result, "Mensaje de resultado\n");

    server4.sin_family = AF_INET;
    inet_pton(AF_INET, "208.80.154.224",/*"212.201.49.24"*/ &(server4.sin_addr.s_addr));
    server4.sin_port = htons(80);

    // Socket para conectarse
    //handle = socket(AF_INET6, SOCK_STREAM, 0);
    handle = socket(AF_INET, SOCK_STREAM, 0);

    if(handle == -1){
        printf("cannot create socket\n");
        return -1;
    }

    if(connect(handle, (struct sockaddr *)&server4, sizeof(server4)) < 0){
        printf("No connection!\n");
        return 1;
    }

    if(send(handle, message, strlen(message), 0) < 0){
        printf("send failed\n");
        return 1;   
    };

/*
    for(int i = 0; i < BUFFER_SIZE; i++){
        char* loc = &buffer[i];
        recv(handle, loc, 1, 0);
    }
*/
    int i = 0;
    while(recv(handle, &(buffer[i++]), 1, 0) > 0){}

    miMetodo();

    printf(result);
    printf("\n");
}